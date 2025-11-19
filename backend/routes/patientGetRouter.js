const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const prisma = new PrismaClient()

const patientGetAPIs = express.Router()

module.exports = patientGetAPIs
