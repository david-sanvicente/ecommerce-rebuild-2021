import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/Products.js'
import {
  getProducts,
  getProductById,
  deleteProductById,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
// router.get('/', getProducts())
router.route('/').get(getProducts).post(protect, admin, createProduct)

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
// router.get('/:id', getProductById())

router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProduct)

export default router
