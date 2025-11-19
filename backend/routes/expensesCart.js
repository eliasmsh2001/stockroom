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

expensesCartRouter.put('/updateCart', async (req, res) => {
  const data = req.body

  let cart = await prisma.withdrawalCart.findFirst({
    where: { stockId: Number(data.userId) },
    include: { items: true }
  })

  let updatedCart
  let departments

  try {
    if (data.case === 'department') {
      const existingDepartment = await prisma.department.findUnique({ where: { name: data.data } })
      updatedCart = await prisma.withdrawalCart.update({
        where: { id: cart.id },
        data: {
          departmentName: existingDepartment?.name ? existingDepartment?.name : data.data.trim()
        }
      })
      const allDepartments = await prisma.department.findMany({})
      departments = allDepartments.filter((item) => item.name.includes(data.data))
    }
    if (data.case === 'cartDate') {
      updatedCart = await prisma.withdrawalCart.update({
        where: { id: cart.id },
        data: { date: data.data }
      })
    }
    if (data.case === 'newItem') {
      const existingItem = await prisma.withdrawalCartItems.findFirst({
        where: { itemId: Number(data.data.id) }
      })

      let newData = { cartId: cart.id, ...data.data, quantity: Number(data.data.quantity) }

      if (!existingItem) {
        updatedCart = await prisma.withdrawalCartItems.create({
          data: {
            itemId: Number(data.data.id),
            genericName: data.data.genericName,
            itemParentId: data.data.itemParentId,
            unit: data.data.unit,
            cartId: cart.id,
            expireDate: data.data.expireDate,
            category: data.data.category,
            quantity: 0,
            maxQuantity: Number(data.data.quantity)
          }
        })
      }
    }

    if (data.case === 'editQuantity') {
      let newData = { cartId: cart.id, ...data.data, quantity: Number(data.data.quantity) }

      updatedCart = await prisma.withdrawalCartItems.update({
        where: { id: Number(data.data.itemId) },
        data: {
          quantity: Number(data.data.value)
        }
      })
    }

    res.json({ updatedCart, departments })
  } catch (e) {
    console.log(e)
  }
  // const updatedCart = await

  //   const cart = await prisma.receiptCart.create({data: {providorName}})
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

expensesCartRouter.post('/editWithdrawal', async (req, res) => {
  const { receiptId, cartId, userId, transport } = req.body.data

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

    let existingDepartment = await prisma.department.findUnique({
      where: { name: cart.departmentName.trim() }
    })

    if (!existingDepartment) {
      existingDepartment = await prisma.department.create({ data: { name: cart.departmentName } })
    }

    const receipt = await prisma.withdrawal.findUnique({
      where: { id: Number(receiptId) },
      include: { items: true }
    })

    for (let i = 0; i < receipt.items.length; i++) {
      let existingItem = await prisma.item.findFirst({ where: { id: receipt.items[i].itemId } })

      if (existingItem) {
        existingItem = await prisma.item.update({
          where: { id: existingItem.id, stockId: receipt.stockId },
          data: { quantity: existingItem.quantity + receipt.items[i].quantity }
        })
      } else {
        existingItem = await prisma.item.create({
          data: {
            itemId: receipt.items[i].itemId,
            genericName: receipt.items[i].genericName,
            unitInfo: 'UNKNOWN',
            unit: receipt.items[i].unit,
            category: receipt.items[i].category,
            quantity: receipt.items[i].quantity,
            expireDate: receipt.items[i].expireDate,
            providor: 'UNKNOWN',
            receiveDate: 'UNKNOWN',
            itemParentId: receipt.items[i].itemParentId,
            stockId: receipt.stockId
          }
        })
      }

      // if (receipt.stockId === 1) {
      //   const existingSubItem = await prisma.item.findFirst({
      //     where: {
      //       itemId: receipt.items[i].itemId,
      //       stockId: 2,
      //       withdrawalId: receipt.items[i].withdrawalId
      //     }
      //   })

      //   if (existingSubItem) {
      //     await prisma.item.update({
      //       where: { id: existingSubItem.id },
      //       data: {
      //         quantity: existingSubItem.quantity - receipt.items[i].quantity
      //       }
      //     })
      //   }
      // }
    }

    await prisma.item.deleteMany({ where: { quantity: 0 } })

    const deletedWithdrawalItems = await prisma.withdrawalItems.deleteMany({
      where: { withdrawalId: receipt.id }
    })

    const updatedWithdrawal = await prisma.withdrawal.update({
      where: { id: receipt.id },
      data: {
        date: cart.date,
        departmentName: existingDepartment.name,
        departmentId: existingDepartment.id
      }
    })

    const newWithdrawalItems = await prisma.withdrawalItems.createMany({
      data: cart.items.map(({ id, cartId, maxQuantity, ...item }) => {
        return { ...item, withdrawalId: updatedWithdrawal.id }
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

        const subStockItem = await prisma.item.deleteMany({
          where: { stockId: 2, withdrawalId: receipt.id }
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

    res.json(updatedWithdrawal)
  } catch (e) {
    console.log(e)
  }
})

module.exports = expensesCartRouter
