const express = require('express')
const { PrismaClient } = require('../../generated/prisma/client')

const prisma = new PrismaClient()

const receiptRouter = express.Router()

receiptRouter.get('/allReceipts', async (req, res) => {
  const { searchTerm, year, month, day } = req.query
  try {
    const receipts = await prisma.receipt.findMany({ include: { items: true } })

    const filteredReceipts = receipts.filter((item) =>
      searchTerm
        ? item.id === Number(searchTerm) ||
          item.providorName.includes(searchTerm) ||
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

    res.json(finialFilteredItems)
  } catch (e) {
    console.log(e)
  }
})

receiptRouter.delete('/deleteReceipt', async (req, res) => {
  const { id } = req.query

  try {
    const deletedItems = await prisma.item.deleteMany({ where: { receiptId: Number(id) } })

    const deletedReceiptItems = await prisma.receiptItems.deleteMany({
      where: { receiptId: Number(id) }
    })

    const deletedRecipt = await prisma.receipt.delete({ where: { id: Number(id) } })

    res.json(deletedItems, deletedReceiptItems, deletedRecipt)
  } catch (e) {
    console.log(e)
  }
})

receiptRouter.put('/editReceipt', async (req, res) => {
  const { receiptId, receiptItems, selectedProvidorValue, receiptDate } = req.body
  try {
    let itemParents = await prisma.itemParent.findMany({})

    function allPropertiesValid(array) {
      return array.every((obj) =>
        Object.values(obj).every((value) => value !== null && value !== undefined && value !== '')
      )
    }

    console.log(allPropertiesValid(receiptItems))

    if (!selectedProvidorValue) {
      return res.status(400).json({
        success: false,
        error: 'Providor name field is required',
        field: 'providorName' // Optional: specify which field has error
      })
    }

    if (!receiptDate) {
      return res.status(401).json({
        success: false,
        error: 'Date field is required',
        field: 'date' // Optional: specify which field has error
      })
    }

    if (receiptItems.length < 1) {
      return res.status(402).json({
        success: false,
        error: 'there should be atleast 1 item in this receipt',
        field: 'items' // Optional: specify which field has error
      })
    }

    if (!allPropertiesValid(receiptItems)) {
      return res.status(403).json({
        success: false,
        error: 'Invalid items data',
        field: 'items' // Optional: specify which field has error
      })
    }

    for (let i = 0; i < receiptItems.length; i++) {
      const item = await prisma.itemParent.findUnique({
        where: { genericName: receiptItems[i].genericName }
      })

      if (!item) {
        const newItem = await prisma.itemParent.create({
          data: {
            genericName: receiptItems[i].genericName,
            category: receiptItems[i].category,
            unit: receiptItems[i].unit,
            latestReceive: receiptDate,
            mainStockSpecific: true
          }
        })
      }
    }

    itemParents = await prisma.itemParent.findMany({})

    const stock = await prisma.user.findFirst({ where: { username: 'stock1' } })

    let existingProvidor = await prisma.providor.findUnique({
      where: { name: selectedProvidorValue }
    })

    if (!existingProvidor) {
      existingProvidor = await prisma.providor.create({ data: { name: selectedProvidorValue } })
    }

    const deletedReceiptItems = await prisma.receiptItems.deleteMany({
      where: { receiptId: Number(receiptId) }
    })

    const deletedItems = await prisma.item.deleteMany({
      where: { receiptId: Number(receiptId) }
    })

    const newReceiptItems = await prisma.receiptItems.createMany({
      data: receiptItems.map(({ id, quantity, ...item }) => {
        return { ...item, receiptId: receiptId, quantity: Number(quantity) }
      })
    })

    const newItems = await prisma.item.createMany({
      data: receiptItems.map(({ id, quantity, ...item }) => {
        return {
          ...item,
          providor: existingProvidor.name,
          receiveDate: receiptDate,
          itemParentId: itemParents.find((parent) => parent.genericName === item.genericName).id,
          stockId: stock.id,
          quantity: Number(quantity),
          receiptId: Number(receiptId),
          receiveDate: receiptDate
        }
      })
    })

    for (let i = 0; i < receiptItems.length; i++) {
      const updatedItemParents = await prisma.itemParent.update({
        where: { genericName: receiptItems[i].genericName },
        data: { latestReceive: receiptDate }
      })
    }

    const updatedReceipt = await prisma.receipt.update({
      where: { id: Number(receiptId) },
      data: {
        providorName: existingProvidor.name,
        providorId: existingProvidor.id,
        date: receiptDate
      },
      include: { items: true }
    })

    res.json(updatedReceipt, newReceiptItems, newItems)
  } catch (e) {
    console.log(e)
  }
})

module.exports = receiptRouter
