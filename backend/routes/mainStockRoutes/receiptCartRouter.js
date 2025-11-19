const express = require('express')
const { PrismaClient } = require('../../generated/prisma/client')

const prisma = new PrismaClient()

const receiptCartRouter = express.Router()

receiptCartRouter.get('/getCart', async (req, res) => {
  try {
    const initialProvidors = await prisma.providor.findMany({})
    const providors = initialProvidors.map((item) => item.name)

    let cart = await prisma.receiptCart.findFirst({ include: { items: true } })

    const initialItemParents = await prisma.itemParent.findMany({})
    const itemParents = initialItemParents.map((item) => item.genericName)

    if (!cart) {
      cart = await prisma.receiptCart.create({})
    }

    res.json({ providors, cart, itemParents })
  } catch (e) {
    console.log(e)
  }
})

receiptCartRouter.put('/updateCart', async (req, res) => {
  const data = req.body

  let cart = await prisma.receiptCart.findFirst({ include: { items: true } })

  let updatedCart
  let providors

  try {
    if (data.case === 'providor') {
      const existingProvidor = await prisma.providor.findUnique({ where: { name: data.data } })
      updatedCart = await prisma.receiptCart.update({
        where: { id: cart.id },
        data: { providorName: existingProvidor?.name ? existingProvidor?.name : data.data.trim() }
      })

      const allProvidors = await prisma.providor.findMany({})
      providors = allProvidors.filter((item) => item.name.includes(data.data))
    }

    if (data.case === 'cartDate') {
      updatedCart = await prisma.receiptCart.update({
        where: { id: cart.id },
        data: { date: data.data }
      })
    }

    if (data.case === 'newItem') {
      const existingItemParent = await prisma.itemParent.findUnique({
        where: { genericName: data.data.genericName }
      })

      if (!existingItemParent) {
        const newItem = await prisma.itemParent.create({
          data: {
            genericName: data.data.genericName,
            category: data.data.category,
            unit: data.data.unitInfo,
            mainStockSpecific: true
          }
        })
      }
      let newData = { cartId: cart.id, ...data.data, quantity: Number(data.data.quantity) }
      updatedCart = await prisma.receiptCartItems.create({ data: newData })
    }

    res.json({ updatedCart, providors })
  } catch (e) {
    console.log(e)
  }
  // const updatedCart = await

  //   const cart = await prisma.receiptCart.create({data: {providorName}})
})

receiptCartRouter.delete('/deleteCartItem', async (req, res) => {
  const { id } = req.query
  try {
    const deletedItem = await prisma.receiptCartItems.delete({ where: { id } })

    res.json(deletedItem)
  } catch (e) {
    console.log(e)
  }
})

receiptCartRouter.delete('/clearReceiptCart', async (req, res) => {
  const { id } = req.query
  try {
    const cart = await prisma.receiptCart.update({
      where: { id: Number(id) },
      data: {
        providorName: '',
        date: ''
      }
    })

    const cartItems = await prisma.receiptCartItems.deleteMany({ where: { cartId: Number(id) } })

    res.json(cart, cartItems)
  } catch (e) {
    console.log(e)
  }
})

receiptCartRouter.post('/newReceipt', async (req, res) => {
  const { data } = req.body

  try {
    const cart = await prisma.receiptCart.findUnique({
      where: { id: data },
      include: { items: true }
    })

    const itemParents = await prisma.itemParent.findMany({})
    const stock = await prisma.user.findFirst({ where: { username: 'stock1' } })

    if (!cart.providorName) {
      return res.status(400).json({
        success: false,
        error: 'Providor name field is required',
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

    let existingProvidor = await prisma.providor.findUnique({
      where: { name: cart.providorName }
    })

    if (!existingProvidor) {
      existingProvidor = await prisma.providor.create({ data: { name: cart.providorName } })
    }

    const newReceipt = await prisma.receipt.create({
      data: {
        date: cart.date ? cart.date : 'No Date',
        providorName: cart.providorName,
        providorId: existingProvidor.id
      }
    })

    const newReceiptItems = await prisma.receiptItems.createMany({
      data: cart.items.map(({ id, cartId, ...item }) => {
        return { ...item, receiptId: newReceipt.id }
      })
    })

    const newItems = await prisma.item.createMany({
      data: cart.items.map(({ id, cartId, ...item }) => {
        return {
          ...item,
          providor: newReceipt.providorName,
          receiveDate: newReceipt.date,
          itemParentId: itemParents.find((parent) => parent.genericName === item.genericName).id,
          stockId: stock.id,
          receiptId: newReceipt.id,
          receiveDate: newReceipt.date
        }
      })
    })

    for (let i = 0; i < cart.items.length; i++) {
      const updatedItemParents = await prisma.itemParent.update({
        where: { genericName: cart.items[i].genericName },
        data: { latestReceive: newReceipt.date }
      })
    }

    res.json(newReceipt, newReceiptItems, newItems)
  } catch (e) {
    console.log(e)
  }
})

module.exports = receiptCartRouter
