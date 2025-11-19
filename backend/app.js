const express = require('express')
const userRouter = require('./routes/user.js')
const receiptCartRouter = require('./routes/mainStockRoutes/receiptCartRouter.js')
const receiptRouter = require('./routes/mainStockRoutes/receiptRouter.js')
const itemsRouter = require('./routes/itemsRouter.js')
const expensesRouter = require('./routes/expensesRouter.js')

const cors = require('cors')
const { PrismaClient } = require('./generated/prisma/client')
const expensesCartRouter = require('./routes/expensesCart.js')
const reportsRouter = require('./routes/reportsRouter.js')

receiptRouter
const prisma = new PrismaClient()
const app = express()
app.use('/uploads', express.static('uploads'))
app.use(express.json()) // For JSON bodies
app.use(express.urlencoded({ extended: true })) // For form data
app.use(cors())

app.use('/api/user', userRouter)
app.use('/receiptCart', receiptCartRouter)
app.use('/receipts', receiptRouter)
app.use('/items', itemsRouter)
app.use('/expenses', expensesRouter)
app.use('/expensesCart', expensesCartRouter)
app.use('/reports', reportsRouter)

// Your middleware and routes here

const PORT = 3001
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err)
  app.exit(1)
})

app.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err)
  app.exit(1)
})

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`)
  } else {
    console.error('Server error:', err)
  }
  process.exit(1)
})
