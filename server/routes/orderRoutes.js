import express from 'express'
import asyncHandler from 'express-async-handler'
import Order from '../models/Orders.js'
import { placeOrder } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, placeOrder)

export default router
