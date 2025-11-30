const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const prisma = new PrismaClient()

const expensesCartRouter = express.Router()

expensesCartRouter.get('/getCart', async (req, res) => {
  const { id, searchTerm, state } = req.query
  try {
    const initialdepartments = await prisma.department.findMany({})
    const departments = initialdepartments.map((item) => item.name)

    let cart = await prisma.withdrawalCart.findFirst({
      where: { stockId: Number(id) },
      include: { items: true }
    })

    let initialItemParents
    if (Number(id) === 2) {
      initialItemParents = await prisma.itemParent.findMany({
        where: { mainStockSpecific: false },
        include: { items: { where: { stockId: 2 } } }
      })
    } else {
      initialItemParents = await prisma.itemParent.findMany({
        include: { items: { where: { stockId: 1 } } }
      })
    }

    searchTerm
      ? (initialItemParents = initialItemParents.filter((item) =>
          item.genericName.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      : initialItemParents

    const rawItems = initialItemParents.map((item) => item.items)
    let items = rawItems.flat()
    const itemParents = items.map((item) => item.genericName)

    if (!cart) {
      cart = await prisma.withdrawalCart.create({ data: { stockId: Number(id) } })
    }

    res.json({ departments, cart, items, initialItemParents, itemParents })
  } catch (e) {
    console.log(e)
  }
})

// expensesCartRouter.put('/updateCart', async (req, res) => {
//   const data = req.body

//   let cart = await prisma.withdrawalCart.findFirst({
//     where: { stockId: Number(data.userId) },
//     include: { items: true }
//   })

//   let updatedCart
//   let departments

//   try {
//     if (data.case === 'department') {
//       const existingDepartment = await prisma.department.findUnique({ where: { name: data.data } })
//       updatedCart = await prisma.withdrawalCart.update({
//         where: { id: cart.id },
//         data: {
//           departmentName: existingDepartment?.name ? existingDepartment?.name : data.data.trim()
//         }
//       })
//       const allDepartments = await prisma.department.findMany({})
//       departments = allDepartments.filter((item) => item.name.includes(data.data))
//     }
//     if (data.case === 'cartDate') {
//       updatedCart = await prisma.withdrawalCart.update({
//         where: { id: cart.id },
//         data: { date: data.data }
//       })
//     }
//     if (data.case === 'newItem') {
//       const existingItem = await prisma.withdrawalCartItems.findFirst({
//         where: { itemId: Number(data.data.id) }
//       })

//       let newData = { cartId: cart.id, ...data.data, quantity: Number(data.data.quantity) }

//       if (!existingItem) {
//         updatedCart = await prisma.withdrawalCartItems.create({
//           data: {
//             itemId: Number(data.data.id),
//             genericName: data.data.genericName,
//             itemParentId: data.data.itemParentId,
//             unit: data.data.unit,
//             cartId: cart.id,
//             expireDate: data.data.expireDate,
//             category: data.data.category,
//             quantity: 0,
//             maxQuantity: Number(data.data.quantity)
//           }
//         })
//       }
//     }

//     if (data.case === 'editQuantity') {
//       let newData = { cartId: cart.id, ...data.data, quantity: Number(data.data.quantity) }

//       updatedCart = await prisma.withdrawalCartItems.update({
//         where: { id: Number(data.data.itemId) },
//         data: {
//           quantity: Number(data.data.value)
//         }
//       })
//     }

//     res.json({ updatedCart, departments })
//   } catch (e) {
//     console.log(e)
//   }
//   // const updatedCart = await

//   //   const cart = await prisma.receiptCart.create({data: {providorName}})
// })

expensesCartRouter.put('/updateCart', async (req, res) => {
  const { userId, case: updateCase, data } = req.body

  // 1. Basic Input Validation
  if (!userId || !updateCase || !data) {
    return res.status(400).json({ error: 'Missing required fields: userId, case, or data.' })
  }

  try {
    const stockId = Number(userId)
    if (isNaN(stockId)) {
      return res.status(400).json({ error: 'Invalid userId provided.' })
    }

    // 2. Find the Cart
    const cart = await prisma.withdrawalCart.findFirst({
      where: { stockId },
      include: { items: true }
    })

    if (!cart) {
      // Depending on business logic, this might be a 404 or a 400 if the cart should exist.
      // Assuming a 404 Not Found for the specific cart.
      return res.status(404).json({ error: `Withdrawal cart not found for userId: ${userId}.` })
    }

    let updatedCart
    let departments = [] // Initialize as empty array for consistent response structure

    // 3. Use a switch statement for clear, mutually exclusive logic
    switch (updateCase) {
      case 'department': {
        const departmentName = String(data).trim()
        if (!departmentName) {
          return res.status(400).json({ error: 'Department name cannot be empty.' })
        }

        // Find or use the provided department name
        const existingDepartment = await prisma.department.findUnique({
          where: { name: departmentName }
        })
        const finalDepartmentName = existingDepartment?.name ?? departmentName

        updatedCart = await prisma.withdrawalCart.update({
          where: { id: cart.id },
          data: { departmentName: finalDepartmentName }
        })

        // Fetch departments for auto-complete/suggestion (assuming this is the intent)
        const allDepartments = await prisma.department.findMany({
          where: {
            name: {
              contains: departmentName
              // mode: 'insensitive' // Use insensitive mode for better search
            }
          }
        })
        departments = allDepartments.map((d) => d.name) // Return only names for a cleaner response
        break
      }

      case 'cartDate': {
        // Basic date validation (can be improved with a dedicated library like 'zod' or 'joi')
        if (!data || typeof data !== 'string') {
          return res.status(400).json({ error: 'Invalid cartDate provided.' })
        }

        updatedCart = await prisma.withdrawalCart.update({
          where: { id: cart.id },
          data: { date: data } // Assuming 'date' field is a string or compatible type
        })
        break
      }

      case 'newItem': {
        const { id, genericName, itemParentId, unit, expireDate, category, quantity } = data

        // Validate required fields for a new item
        if (!id || !genericName || !quantity) {
          return res
            .status(400)
            .json({ error: 'Missing required fields for new item: id, genericName, or quantity.' })
        }

        const itemId = Number(id)
        const itemQuantity = Number(quantity)

        if (isNaN(itemId) || isNaN(itemQuantity) || itemQuantity <= 0) {
          return res.status(400).json({ error: 'Invalid item ID or quantity provided.' })
        }

        // Check if item already exists in the cart (using itemId as unique identifier within the cart)
        const existingItem = await prisma.withdrawalCartItems.findFirst({
          where: { cartId: cart.id, itemId: itemId }
        })

        if (existingItem) {
          // If the item exists, update its maxQuantity instead of creating a new entry
          updatedCart = await prisma.withdrawalCartItems.update({
            where: { id: existingItem.id },
            data: { maxQuantity: existingItem.maxQuantity + itemQuantity }
          })
        } else {
          // Create a new item with initial quantity 0 and maxQuantity set
          updatedCart = await prisma.withdrawalCartItems.create({
            data: {
              itemId,
              genericName,
              itemParentId,
              unit,
              cartId: cart.id,
              expireDate,
              category,
              quantity: 0, // Initial quantity is 0 as per original logic
              maxQuantity: itemQuantity
            }
          })
        }
        break
      }

      case 'editQuantity': {
        const { itemId, value } = data

        if (!itemId || value === undefined) {
          return res
            .status(400)
            .json({ error: 'Missing required fields for quantity edit: itemId or value.' })
        }

        const cartItemId = Number(itemId)
        const newQuantity = Number(value)

        if (isNaN(cartItemId) || isNaN(newQuantity) || newQuantity < 0) {
          return res.status(400).json({ error: 'Invalid cart item ID or quantity value.' })
        }

        // Optional: Add logic to check if newQuantity exceeds maxQuantity

        updatedCart = await prisma.withdrawalCartItems.update({
          where: { id: cartItemId, cartId: cart.id }, // Ensure item belongs to the current cart
          data: { quantity: newQuantity }
        })
        break
      }

      default:
        return res.status(400).json({ error: `Unknown update case: ${updateCase}` })
    }

    // 4. Re-fetch the full cart for a consistent response
    const finalCart = await prisma.withdrawalCart.findFirst({
      where: { id: cart.id },
      include: { items: true }
    })

    // 5. Send a successful response
    return res.json({ cart: finalCart, departments })
  } catch (e) {
    // 6. Centralized Error Handling
    console.error('Error updating cart:', e)

    // Check for specific Prisma errors (e.g., P2025 for not found on update)
    if (e.code === 'P2025') {
      return res.status(404).json({ error: 'Record to update not found.' })
    }

    // Generic server error response
    return res.status(500).json({ error: 'An internal server error occurred during cart update.' })
  }
})

expensesCartRouter.delete('/deleteCartItem', async (req, res) => {
  const { id } = req.query
  try {
    const deletedItem = await prisma.withdrawalCartItems.delete({ where: { id: Number(id) } })

    res.json(deletedItem)
  } catch (e) {
    console.log(e)
  }
})

expensesCartRouter.post('/newWithdrawal', async (req, res) => {
  const { cartId, userId, transport } = req.body.data

  try {
    const cart = await prisma.withdrawalCart.findUnique({
      where: { id: cartId, stockId: userId },
      include: { items: true }
    })

    if (!cart.departmentName) {
      return res.status(400).json({
        success: false,
        error: 'Department name field is required',
        field: 'providorName' // Optional: specify which field has error
      })
    }

    if (!cart.date) {
      return res.status(401).json({
        success: false,
        error: 'Date field is required',
        field: 'date' // Optional: specify which field has error
      })
    }

    if (cart.items.length < 1) {
      return res.status(402).json({
        success: false,
        error: 'there should be atleast 1 item in this receipt',
        field: 'items' // Optional: specify which field has error
      })
    }

    for (let i = 0; i < cart.items.length; i++) {
      const item = await prisma.item.findUnique({ where: { id: cart.items[i].itemId } })

      if (item.quantity < cart.items[i].quantity) {
        return res.status(403).json({
          success: false,
          error: 'please make sure you entered valid items quantity',
          field: 'items' // Optional: specify which field has error
        })
      }
    }

    let existingDepartment = await prisma.department.findUnique({
      where: { name: cart.departmentName.trim() }
    })

    if (!existingDepartment) {
      existingDepartment = await prisma.department.create({ data: { name: cart.departmentName } })
    }

    const newWithdrawal = await prisma.withdrawal.create({
      data: {
        date: cart.date ? cart.date : 'No Date',
        departmentName: cart.departmentName,
        departmentId: existingDepartment.id,
        stockId: Number(userId)
      }
    })

    const newWithdrawalItems = await prisma.withdrawalItems.createMany({
      data: cart.items.map(({ id, cartId, maxQuantity, ...item }) => {
        return {
          ...item,
          withdrawalId: newWithdrawal.id,
          withdrawDate: cart.date,
          stockId: cart.stockId
        }
      })
    })

    for (let i = 0; i < cart.items.length; i++) {
      const updatedItemParent = await prisma.itemParent.update({
        where: { genericName: cart.items[i].genericName },
        data: { latestWithdrawal: cart.date }
      })
      const item = await prisma.item.findUnique({ where: { id: cart.items[i].itemId } })

      if (item.quantity < cart.items[i].quantity) {
        return res.status(403).json({
          success: false,
          error: 'there should be atleast 1 item in this receipt',
          field: 'items' // Optional: specify which field has error
        })
      }

      const updatedItem = await prisma.item.update({
        where: {
          id: cart.items[i].itemId
        },
        data: {
          quantity: item.quantity - cart.items[i].quantity
        }
      })

      if (transport) {
        await prisma.itemParent.update({
          where: { genericName: cart.items[i].genericName },
          data: { mainStockSpecific: false }
        })

        await prisma.item.create({
          data: {
            itemId: item.id,
            genericName: cart.items[i].genericName,
            unitInfo: item.unitInfo,
            unit: cart.items[i].unit,
            category: cart.items[i].category,
            quantity: Number(cart.items[i].quantity),
            expireDate: cart.items[i].expireDate,
            providor: item.providor,
            receiveDate: cart.date,
            // itemParentId: updatedItemParent.id,
            // stockId: 2,
            // receiptId: item.receiptId,
            withdrawal: {
              connect: {
                id: newWithdrawal.id
              }
            },
            itemParent: {
              connect: {
                id: updatedItemParent.id
              }
            },
            stock: {
              connect: {
                id: 2
              }
            }
          }
        })
      }
    }

    await prisma.item.deleteMany({ where: { quantity: 0 } })
    await prisma.item.deleteMany({ where: { quantity: { lte: 0 } } })

    res.json(newWithdrawal, newWithdrawalItems)
  } catch (e) {
    console.log(e)
  }
})

expensesCartRouter.put('/clearWithdrawalCart', async (req, res) => {
  const { id } = req.query
  try {
    const cart = await prisma.withdrawalCart.update({
      where: { id: Number(id) },
      data: {
        departmentName: '',
        date: '',
        stockId: 0
      }
    })
    const cartItems = await prisma.withdrawalCartItems.deleteMany({ where: { cartId: Number(id) } })
    res.json(cart, cartItems)
  } catch (e) {
    console.log(e)
  }
})

expensesCartRouter.put('/settingCart', async (req, res) => {
  const data = req.body
  try {
    let cart = await prisma.withdrawalCart.findFirst({
      where: { stockId: data.stockId },
      include: { items: true }
    })

    if (!cart) {
      cart = await prisma.withdrawalCart.create({ data: { stockId: data.stockId } })
    } else {
      await prisma.withdrawalCart.update({
        where: { id: cart.id },
        data: {
          departmentName: '',
          date: '',
          stockId: 0
        }
      })
      await prisma.withdrawalCartItems.deleteMany({ where: { cartId: cart.id } })
    }

    const updatedCart = await prisma.withdrawalCart.update({
      where: { id: cart.id },
      data: {
        date: data.date,
        departmentName: data.departmentName,
        stockId: Number(data.stockId)
      }
    })

    for (let i = 0; i < data.items.length; i++) {
      const item = await prisma.item.findFirst({
        where: {
          stockId: data.stockId,
          id: data.items[i].itemId
        }
      })
      await prisma.withdrawalCartItems.create({
        data: {
          genericName: data.items[i].genericName,
          itemId: data.items[i].itemId,
          unit: data.items[i].unit,
          category: data.items[i].category,
          quantity: data.items[i].quantity,
          expireDate: data.items[i].expireDate,
          itemParentId: data.items[i].itemParentId,
          cartId: updatedCart.id,
          maxQuantity: item ? item.quantity + data.items[i].quantity : data.items[i].quantity
        }
      })
    }

    res.json(updatedCart)
  } catch (e) {
    console.log(e)
  }
})

// expensesCartRouter.post('/editWithdrawal', async (req, res) => {
//   const { receiptId, cartId, userId, transport } = req.body.data

//   try {
//     const cart = await prisma.withdrawalCart.findUnique({
//       where: { id: cartId, stockId: userId },
//       include: { items: true }
//     })

//     if (!cart.departmentName) {
//       return res.status(400).json({
//         success: false,
//         error: 'Department name field is required',
//         field: 'providorName' // Optional: specify which field has error
//       })
//     }

//     if (!cart.date) {
//       return res.status(401).json({
//         success: false,
//         error: 'Date field is required',
//         field: 'date' // Optional: specify which field has error
//       })
//     }

//     if (cart.items.length < 1) {
//       return res.status(402).json({
//         success: false,
//         error: 'there should be atleast 1 item in this receipt',
//         field: 'items' // Optional: specify which field has error
//       })
//     }

//     for (let i = 0; i < cart.items.length; i++) {
//       const item = await prisma.item.findUnique({ where: { id: cart.items[i].itemId } })

//       if (item.quantity < cart.items[i].quantity) {
//         return res.status(403).json({
//           success: false,
//           error: 'there should be atleast 1 item in this receipt',
//           field: 'items' // Optional: specify which field has error
//         })
//       }
//     }

//     let existingDepartment = await prisma.department.findUnique({
//       where: { name: cart.departmentName.trim() }
//     })

//     if (!existingDepartment) {
//       existingDepartment = await prisma.department.create({ data: { name: cart.departmentName } })
//     }

//     const receipt = await prisma.withdrawal.findUnique({
//       where: { id: Number(receiptId) },
//       include: { items: true }
//     })

//     for (let i = 0; i < receipt.items.length; i++) {
//       let existingItem = await prisma.item.findFirst({ where: { id: receipt.items[i].itemId } })

//       if (existingItem) {
//         existingItem = await prisma.item.update({
//           where: { id: existingItem.id, stockId: receipt.stockId },
//           data: { quantity: existingItem.quantity + receipt.items[i].quantity }
//         })
//       } else {
//         existingItem = await prisma.item.create({
//           data: {
//             itemId: receipt.items[i].itemId,
//             genericName: receipt.items[i].genericName,
//             unitInfo: 'UNKNOWN',
//             unit: receipt.items[i].unit,
//             category: receipt.items[i].category,
//             quantity: receipt.items[i].quantity,
//             expireDate: receipt.items[i].expireDate,
//             providor: 'UNKNOWN',
//             receiveDate: 'UNKNOWN',
//             itemParentId: receipt.items[i].itemParentId,
//             stockId: receipt.stockId
//           }
//         })
//       }

//       // if (receipt.stockId === 1) {
//       //   const existingSubItem = await prisma.item.findFirst({
//       //     where: {
//       //       itemId: receipt.items[i].itemId,
//       //       stockId: 2,
//       //       withdrawalId: receipt.items[i].withdrawalId
//       //     }
//       //   })

//       //   if (existingSubItem) {
//       //     await prisma.item.update({
//       //       where: { id: existingSubItem.id },
//       //       data: {
//       //         quantity: existingSubItem.quantity - receipt.items[i].quantity
//       //       }
//       //     })
//       //   }
//       // }
//     }

//     await prisma.item.deleteMany({ where: { quantity: 0 } })

//     const deletedWithdrawalItems = await prisma.withdrawalItems.deleteMany({
//       where: { withdrawalId: receipt.id }
//     })

//     const updatedWithdrawal = await prisma.withdrawal.update({
//       where: { id: receipt.id },
//       data: {
//         date: cart.date,
//         departmentName: existingDepartment.name,
//         departmentId: existingDepartment.id
//       }
//     })

//     const newWithdrawalItems = await prisma.withdrawalItems.createMany({
//       data: cart.items.map(({ id, cartId, maxQuantity, ...item }) => {
//         return { ...item, withdrawalId: updatedWithdrawal.id }
//       })
//     })

//     for (let i = 0; i < cart.items.length; i++) {
//       const updatedItemParent = await prisma.itemParent.update({
//         where: { genericName: cart.items[i].genericName },
//         data: { latestWithdrawal: cart.date }
//       })
//       const item = await prisma.item.findUnique({ where: { id: cart.items[i].itemId } })

//       const updatedItem = await prisma.item.update({
//         where: {
//           id: cart.items[i].itemId
//         },
//         data: {
//           quantity: item.quantity - cart.items[i].quantity
//         }
//       })
//       if (transport) {
//         await prisma.itemParent.update({
//           where: { genericName: cart.items[i].genericName },
//           data: { mainStockSpecific: false }
//         })

//         const subStockItem = await prisma.item.deleteMany({
//           where: { stockId: 2, withdrawalId: receipt.id }
//         })

//         await prisma.item.create({
//           data: {
//             itemId: item.id,
//             genericName: cart.items[i].genericName,
//             unitInfo: item.unitInfo,
//             unit: cart.items[i].unit,
//             category: cart.items[i].category,
//             quantity: Number(cart.items[i].quantity),
//             expireDate: cart.items[i].expireDate,
//             providor: item.providor,
//             receiveDate: cart.date,
//             // itemParentId: updatedItemParent.id,
//             // stockId: 2,
//             // receiptId: item.receiptId,
//             withdrawal: {
//               connect: {
//                 id: updatedWithdrawal.id
//               }
//             },
//             itemParent: {
//               connect: {
//                 id: updatedItemParent.id
//               }
//             },
//             stock: {
//               connect: {
//                 id: 2
//               }
//             }
//           }
//         })
//       }
//     }

//     res.json(updatedWithdrawal)
//   } catch (e) {
//     console.log(e)
//   }
// })

expensesCartRouter.post('/editWithdrawal', async (req, res) => {
  const { receiptId, cartId, userId, transport } = req.body.data

  // Input validation
  if (!receiptId || !cartId || !userId) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: receiptId, cartId, and userId are required'
    })
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Get cart with validation
      const cart = await tx.withdrawalCart.findUnique({
        where: { id: cartId, stockId: userId },
        include: { items: true }
      })

      if (!cart) {
        throw new Error('Cart not found')
      }

      // Validation checks with consistent error handling
      if (!cart.departmentName || cart.departmentName === '') {
        throw new Error('DEPARTMENT_NAME_REQUIRED')
      }

      if (!cart.date) {
        throw new Error('DATE_REQUIRED')
      }

      if (!cart.items || cart.items.length === 0) {
        throw new Error('MINIMUM_ONE_ITEM_REQUIRED')
      }

      // 2. Validate item quantities
      for (const cartItem of cart.items) {
        const item = await tx.item.findUnique({
          where: { id: cartItem.itemId }
        })

        if (!item) {
          throw new Error(`ITEM_NOT_FOUND: ${cartItem.itemId}`)
        }

        if (item.quantity < cartItem.quantity) {
          throw new Error('INSUFFICIENT_QUANTITY')
        }
      }

      // 3. Find or create department
      let existingDepartment = await tx.department.findUnique({
        where: { name: cart.departmentName.trim() }
      })

      if (!existingDepartment) {
        existingDepartment = await tx.department.create({
          data: { name: cart.departmentName }
        })
      }

      // 4. Get existing receipt
      const receipt = await tx.withdrawal.findUnique({
        where: { id: Number(receiptId) },
        include: { items: true }
      })

      if (!receipt) {
        throw new Error('RECEIPT_NOT_FOUND')
      }

      // 5. Restore items from old receipt
      for (const receiptItem of receipt.items) {
        const existingItem = await tx.item.findFirst({
          where: { id: receiptItem.itemId }
        })

        if (existingItem) {
          await tx.item.update({
            where: { id: existingItem.id, stockId: receipt.stockId },
            data: { quantity: existingItem.quantity + receiptItem.quantity }
          })
        } else {
          await tx.item.create({
            data: {
              itemId: receiptItem.itemId,
              genericName: receiptItem.genericName,
              unitInfo: receiptItem.unitInfo || 'UNKNOWN',
              unit: receiptItem.unit,
              category: receiptItem.category,
              quantity: receiptItem.quantity,
              expireDate: receiptItem.expireDate,
              providor: receiptItem.providor || 'UNKNOWN',
              receiveDate: receiptItem.receiveDate || 'UNKNOWN',
              itemParentId: receiptItem.itemParentId,
              stockId: receipt.stockId
            }
          })
        }
      }

      // 6. Clean up zero quantity items
      await tx.item.deleteMany({ where: { quantity: 0 } })

      // 7. Delete old withdrawal items
      await tx.withdrawalItems.deleteMany({
        where: { withdrawalId: receipt.id }
      })

      // 8. Update withdrawal record
      const updatedWithdrawal = await tx.withdrawal.update({
        where: { id: receipt.id },
        data: {
          date: cart.date,
          departmentName: existingDepartment.name,
          departmentId: existingDepartment.id
        }
      })

      // 9. Create new withdrawal items
      const newWithdrawalItemsData = cart.items.map(({ id, cartId, maxQuantity, ...item }) => ({
        ...item,
        withdrawalId: updatedWithdrawal.id
      }))

      await tx.withdrawalItems.createMany({
        data: newWithdrawalItemsData
      })

      // 10. Process items and update quantities
      for (const cartItem of cart.items) {
        // Update item parent latest withdrawal date
        await tx.itemParent.update({
          where: { genericName: cartItem.genericName },
          data: { latestWithdrawal: cart.date }
        })

        // Update item quantity
        const item = await tx.item.findUnique({
          where: { id: cartItem.itemId }
        })

        await tx.item.update({
          where: { id: cartItem.itemId },
          data: {
            quantity: item.quantity - cartItem.quantity
          }
        })

        // Handle transport case
        if (transport) {
          await tx.itemParent.update({
            where: { genericName: cartItem.genericName },
            data: { mainStockSpecific: false }
          })

          // Delete existing substock items for this withdrawal
          await tx.item.deleteMany({
            where: {
              stockId: 2,
              withdrawalId: receipt.id
            }
          })

          // Create new substock item
          await tx.item.create({
            data: {
              itemId: item.id,
              genericName: cartItem.genericName,
              unitInfo: item.unitInfo,
              unit: cartItem.unit,
              category: cartItem.category,
              quantity: Number(cartItem.quantity),
              expireDate: cartItem.expireDate,
              providor: item.providor,
              receiveDate: cart.date,
              withdrawalId: updatedWithdrawal.id,
              itemParentId: item.itemParentId,
              stockId: 2
            }
          })
        }
      }

      return updatedWithdrawal
    })

    res.json({
      success: true,
      data: result
    })
  } catch (error) {
    console.error('Edit withdrawal error:', error)

    // Handle specific error cases
    const errorMap = {
      DEPARTMENT_NAME_REQUIRED: {
        status: 400,
        message: 'Department name field is required',
        field: 'departmentName'
      },
      DATE_REQUIRED: {
        status: 400,
        message: 'Date field is required',
        field: 'date'
      },
      MINIMUM_ONE_ITEM_REQUIRED: {
        status: 400,
        message: 'There should be at least 1 item in this receipt',
        field: 'items'
      },
      INSUFFICIENT_QUANTITY: {
        status: 400,
        message: 'Insufficient quantity for one or more items',
        field: 'items'
      }
    }

    const errorInfo = errorMap[error.message] || {
      status: 500,
      message: 'Internal server error'
    }

    res.status(errorInfo.status).json({
      success: false,
      error: errorInfo.message,
      field: errorInfo.field
    })
  }
})

module.exports = expensesCartRouter
