import express from 'express'
import {
  placeOrder,
  getAllOrders,
  getOrderById,
  updateOrderPaid,
  getMyOrders,
  updateOrderDelivered,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, placeOrder).get(protect, admin, getAllOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderDelivered)

export default router
