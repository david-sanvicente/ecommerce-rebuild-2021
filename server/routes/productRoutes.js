import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/Products.js'
import {
  getProducts,
  getProductById,
  deleteProductById,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
// router.get('/', getProducts())
router.route('/').get(getProducts)

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
// router.get('/:id', getProductById())
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProductById)

export default router
