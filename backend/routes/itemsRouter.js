const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const prisma = new PrismaClient()

const itemsRouter = express.Router()

itemsRouter.get('/allItems', async (req, res) => {
  const { id, searchTerm, category } = req.query

  try {
    let itemsParents

    if (Number(id) === 1) {
      itemsParents = await prisma.itemParent.findMany({
        include: {
          items: { where: { stockId: Number(id) } },
          withdrawals: { where: { stockId: Number(id) } }
        },
        orderBy: { genericName: 'asc' }
      })
    } else if (Number(id) === 2) {
      itemsParents = await prisma.itemParent.findMany({
        where: { mainStockSpecific: false },
        include: {
          items: { where: { stockId: Number(id) } },
          withdrawals: { where: { stockId: Number(id) } }
        },
        orderBy: { genericName: 'asc' }
      })
    } else {
      itemsParents = await prisma.itemParent.findMany({
        include: { items: true, withdrawals: true },
        orderBy: { genericName: 'asc' }
      })
    }

    const tweakedItemParents = itemsParents.map((item) => ({
      ...item,
      quantity: item.items.map((subItem) => ` ${subItem.quantity} ${subItem.unit}`),
      // soonestExpire: item.items.sort(
      //   (a, b) => b.expireDate && new Date(b.expireDate) - a.expireDate && new Date(a.expireDate)
      // )[0].expireDate
      soonestExpire:
        item.items.length > 0 &&
        item.items.reduce((soonest, current) => {
          const currentDate = new Date(current.expireDate)
          const soonestDate = new Date(soonest.expireDate)
          return currentDate < soonestDate ? current : soonest
        }).expireDate,
      latestWithdrawal:
        item.withdrawals.length > 0 &&
        item.withdrawals.reduce((soonest, current) => {
          const currentDate = new Date(current.withdrawDate)
          const soonestDate = new Date(soonest.withdrawDate)
          return currentDate > soonestDate ? current : soonest
        }).withdrawDate
    }))

    const filteredItemParents = tweakedItemParents.filter(
      (item) =>
        (searchTerm
          ? item.genericName.toLowerCase().includes(searchTerm.toLocaleLowerCase().trim())
          : item) && (category ? item.category === category : item)
    )

    res.json(filteredItemParents)
  } catch (e) {
    console.log(e)
  }
})

itemsRouter.put('/editItem', async (req, res) => {
  const { userId, itemParentId, itemParentName, itemParentUnit, itemCategory, subItems } = req.body

  try {
    let itemParent = await prisma.itemParent.findUnique({
      where: {
        genericName: itemParentName
      }
    })

    // if (itemParent) {
    //   return res.status(400).json({
    //     success: false,
    //     error: 'Name Already exists',
    //     field: 'genericName' // Optional: specify which field has error
    //   })
    // }

    if (!itemParent) {
      itemParent = await prisma.itemParent.update({
        where: { id: itemParentId },
        data: {
          genericName: itemParentName.trim()
        }
      })
    }

    itemParent = await prisma.itemParent.update({
      where: { id: itemParentId },
      data: {
        category: itemCategory,
        unit: itemParentUnit.trim()
      }
    })

    const deletedItems = await prisma.item.deleteMany({
      where: { itemParentId: itemParent.id, stockId: Number(userId) }
    })

    const newItems = await prisma.item.createMany({
      data: subItems.map(({ stockId, itemParentId, quantity, ...item }) => {
        return {
          ...item,
          itemParentId: itemParent.id,
          quantity: Number(quantity),
          stockId: subItems[0].stockId
        }
      })
    })

    const updatedParentNameToSend = await prisma.itemParent.findUnique({
      where: { id: itemParentId },
      include: { items: { where: { stockId: Number(userId) } } }
    })

    res.json(updatedParentNameToSend)
  } catch (e) {
    console.log(e)
  }
})

itemsRouter.delete('/deleteItem', async (req, res) => {
  const { id } = req.query
  try {
    const deletedSubItems = await prisma.item.deleteMany({ where: { itemParentId: id } })
    const deletedItem = await prisma.itemParent.delete({ where: { id } })

    res.json(deletedItem, deletedSubItems)
  } catch (e) {
    console.log(e)
    res.json('something went wrong')
  }
})

itemsRouter.post('/addItem', async (req, res) => {
  const { data, userId } = req.body

  try {
    let itemParent = await prisma.itemParent.findUnique({
      where: { genericName: data.genericName }
    })

    if (!itemParent) {
      itemParent = await prisma.itemParent.create({
        data: {
          genericName: data.genericName,
          unit: data.unitInfo,
          category: data.category,
          mainStockSpecific: userId === 2 ? false : true
        }
      })
    }

    const item = await prisma.item.create({
      data: {
        genericName: data.genericName,
        unitInfo: data.unitInfo,

        unit: data.unit,
        category: data.category,
        quantity: Number(data.quantity),
        expireDate: data.expireDate ? data.expireDate : 'NO DATE',
        providor: 'UNKNOWN',
        receiveDate: 'UNKNOWN',
        itemParentId: itemParent.id,
        stockId: userId,
        receiptId: 0
      }
    })

    await prisma.item.update({
      where: { id: item.id },
      data: {
        itemId: item.id
      }
    })

    res.json(item, itemParent)
  } catch (e) {
    console.log(e)
    res.json('something went wrong')
  }
})

itemsRouter.get('/itemsHighlights', async (req, res) => {
  const { id } = req.query

  function getItemsExpiringInNext30Days(items) {
    const today = new Date()
    const next30Days = new Date()
    next30Days.setDate(today.getDate() + 120)

    return items.filter((item) => {
      const expireDate = new Date(item.expireDate)
      return expireDate <= next30Days
    })
  }

  let itemsParents

  if (Number(id) === 1) {
    itemsParents = await prisma.itemParent.findMany({
      include: { items: { where: { stockId: Number(id) } } }
    })
  } else if (Number(id) === 2) {
    itemsParents = await prisma.itemParent.findMany({
      where: { mainStockSpecific: false },
      include: { items: { where: { stockId: Number(id) } } }
    })
  } else {
    itemsParents = await prisma.itemParent.findMany({
      include: { items: true }
    })
  }

  const rawItems = itemsParents.map((item) => item.items)
  let items = rawItems.flat()

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

  // Usage examples:
  const expiryItems = getItemsExpiringInNext30Days(items)

  const groupedItems = groupAndSumItemsByMultipleCriteria(items, ['genericName', 'unit'])
  const filteredGroupedItems = groupedItems.filter((item) => item.quantity < 20)
  const emptyItemParents = itemsParents.filter((item) => item.items.length == 0)
  const runningOutItems = [...emptyItemParents, ...filteredGroupedItems]
  // const expiryItems = [...expired, ...expiringSoon]
  res.json({ runningOutItems, expiryItems })
})

module.exports = itemsRouter
