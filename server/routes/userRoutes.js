import express from 'express'
import asyncHandler from 'express-async-handler'
import Users from '../models/Users.js'
import { authUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
