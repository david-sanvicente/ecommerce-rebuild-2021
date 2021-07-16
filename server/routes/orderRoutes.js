import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Order from '../models/Orders.js'
import {
  placeOrder,
  getAllOrders,
  getOrderById,
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, placeOrder)
router.route('/:id').get(protect, getOrderById)
// router.route('/').get(getAllOrders)

export default router
