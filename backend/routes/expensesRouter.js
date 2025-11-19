const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const prisma = new PrismaClient()

const expensesRouter = express.Router()

expensesRouter.get('/allWithdrawals', async (req, res) => {
  const { userId, searchTerm, year, month, day } = req.query

  function groupAndSumItemsByMultipleCriteria(items, groupBy = ['genericName', 'unit']) {
    const grouped = {}

    items.forEach((item) => {
      // Create key based on specified properties
      const key = groupBy.map((prop) => item[prop]).join('-')

      if (!grouped[key]) {
        grouped[key] = {
          ...groupBy.reduce((obj, prop) => {
            obj[prop] = item[prop]
            return obj
          }, {}),
          quantity: 0,
          originalItems: [] // Keep track of original items
        }
      }

      grouped[key].quantity += item.quantity
      grouped[key].originalItems.push(item)
    })

    return Object.values(grouped)
  }

  try {
    const receipts = await prisma.withdrawal.findMany({
      where: { stockId: Number(userId) },
      include: { items: true }
    })

    const filteredReceipts = receipts.filter((item) =>
      searchTerm
        ? item.id === Number(searchTerm) ||
          item.departmentName.includes(searchTerm) ||
          item.items.find((subItem) =>
            subItem.genericName.toLowerCase().includes(searchTerm.toLowerCase().trim())
          )
        : item
    )

    const finialFilteredItems = filteredReceipts
      .filter(
        (item) =>
          (year ? new Date(item.date).getFullYear() == year : item) &&
          (month ? new Date(item.date).getMonth() + 1 === Number(month) : item) &&
          (day ? new Date(item.date).getDate() === Number(day) : item)
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))

    const rawItems = finialFilteredItems.map((item) => item.items)
    let items = rawItems.flat()

    const groupedItems = groupAndSumItemsByMultipleCriteria(items, ['genericName', 'unit'])

    res.json({ finialFilteredItems, groupedItems })
  } catch (e) {
    console.log(e)
  }
})

// expensesRouter.delete('/deleteWithdrawal', async (req, res) => {
//   const { id } = req.query

//   try {
//     const receipt = await prisma.withdrawal.findUnique({
//       where: { id: Number(id) },
//       include: { items: true }
//     })

//     for (let i = 0; i < receipt.items.length; i++) {
//       let existingItem = await prisma.item.findFirst({ where: { id: receipt.items[i].itemId } })

//       if (existingItem) {
//         existingItem = await prisma.item.update({
//           where: { id: existingItem.id },
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

//       await prisma.item.update({
//         where: { id: existingItem.id },
//         data: {
//           quantity: existingItem.quantity - receipt.items[i].quantity
//         }
//       })
//     }

//     const deletedWithdrawalItems = await prisma.withdrawalItems.deleteMany({
//       where: { withdrawalId: receipt.id }
//     })
//     const deletedWithdrawal = await prisma.withdrawal.delete({
//       where: { id: receipt.id }
//     })

//     await prisma.item.deleteMany({ where: { quantity: 0 } })

//     res.json(deletedWithdrawal, deletedWithdrawalItems)
//   } catch (e) {
//     console.log(e)
//   }
// })

expensesRouter.delete('/deleteWithdrawal', async (req, res) => {
  const { id } = req.query

  // Input validation
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({
      error: 'Valid withdrawal ID is required'
    })
  }

  const withdrawalId = Number(id)

  try {
    // Find the withdrawal with related items
    const withdrawal = await prisma.withdrawal.findUnique({
      where: { id: withdrawalId },
      include: { items: true }
    })

    if (!withdrawal) {
      return res.status(404).json({
        error: 'Withdrawal not found'
      })
    }

    // Use transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx) => {
      // Restore item quantities and handle items
      for (const withdrawalItem of withdrawal.items) {
        let existingItem = await tx.item.findFirst({
          where: { id: withdrawalItem.itemId, stockId: withdrawal.stockId }
        })

        if (existingItem) {
          // Restore the quantity that was withdrawn
          await tx.item.update({
            where: { id: existingItem.id },
            data: {
              quantity: existingItem.quantity + withdrawalItem.quantity
            }
          })
        } else {
          // Recreate item if it was deleted (with improved default values)
          await tx.item.create({
            data: {
              itemId: withdrawalItem.itemId,
              genericName: withdrawalItem.genericName,
              unitInfo: withdrawalItem.unitInfo || 'UNKNOWN',
              unit: withdrawalItem.unit,
              category: withdrawalItem.category,
              quantity: withdrawalItem.quantity,
              expireDate: withdrawalItem.expireDate,
              providor: withdrawalItem.providor || 'UNKNOWN',
              receiveDate: withdrawalItem.receiveDate || new Date().toISOString(),
              itemParentId: withdrawalItem.itemParentId,
              stockId: withdrawal.stockId
            }
          })
        }
      }

      // Delete withdrawal items
      const deletedWithdrawalItems = await tx.withdrawalItems.deleteMany({
        where: { withdrawalId: withdrawalId }
      })

      const deletedItems = await tx.item.deleteMany({
        where: { withdrawalId: withdrawalId, stockId: 2 }
      })

      // Delete the withdrawal
      const deletedWithdrawal = await tx.withdrawal.delete({
        where: { id: withdrawalId }
      })

      // Clean up items with zero quantity
      await tx.item.deleteMany({
        where: { quantity: 0 }
      })

      return { deletedWithdrawal, deletedWithdrawalItems }
    })

    res.json({
      message: 'Withdrawal deleted successfully',
      data: result
    })
  } catch (error) {
    console.error('Error deleting withdrawal:', error)

    // More specific error handling
    if (error.code === 'P2025') {
      return res.status(404).json({
        error: 'Record not found or already deleted'
      })
    }

    res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
})

module.exports = expensesRouter
