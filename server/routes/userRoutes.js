import express from 'express'
import asyncHandler from 'express-async-handler'
import Users from '../models/Users.js'
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()
router.route('/').get(protect, admin, getAllUsers)
router.route('/').post(registerUser)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)

export default router
