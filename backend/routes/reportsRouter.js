const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const prisma = new PrismaClient()

const reportsRouter = express.Router()

reportsRouter.get('/expenses', async (req, res) => {
  const { userId, startingDate, endingDate, category, itemName, selectedDepartment } = req.query

  function filterByDateRange(array, startDate, endDate, dateProperty = 'date') {
    const start = new Date(startDate)
    let end = endDate && endDate !== '' ? new Date(endDate) : new Date().getDate()

    return array.filter((item) => {
      const itemDate = new Date(item[dateProperty])
      return itemDate >= start && itemDate <= end
    })
  }

  try {
    let departments = await prisma.department.findMany({})
    departments = departments.map((item) => item.name)

    let existingDepartment = await prisma.department.findFirst({
      where: {
        name: selectedDepartment
      }
    })

    let itemNames = await prisma.itemParent.findMany({})

    if (startingDate === '') {
      return res.status(400).json({
        success: false,
        error: 'date  is required',
        field: 'date' // Optional: specify which field has error
      })
    }

    let withdrawals = await prisma.withdrawal.findMany({
      where: { stockId: Number(userId) },
      include: { items: true }
    })

    if (selectedDepartment && existingDepartment) {
      withdrawals = await prisma.withdrawal.findMany({
        where: { stockId: Number(userId), departmentId: existingDepartment.id },
        include: { items: true }
      })
    }

    const filteredWithdrawals = filterByDateRange(withdrawals, startingDate, endingDate)

    const rawItems = filteredWithdrawals.map((item) => item.items)

    let items = rawItems.flat()

    if (category) {
      itemNames = await prisma.itemParent.findMany({ where: { category } })
      itemNames = itemNames.map((item) => item.genericName)

      items = items.filter((item) => item?.category === category)
    }

    if (itemName) {
      items = items.filter((item) => item?.genericName === itemName)
    }

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

    let withdrawedItems

    if (items) {
      withdrawedItems = groupAndSumItemsByMultipleCriteria(items)
    }

    res.json({ departments, itemNames, withdrawedItems })
  } catch (e) {
    console.log(e)
  }
})

module.exports = reportsRouter
