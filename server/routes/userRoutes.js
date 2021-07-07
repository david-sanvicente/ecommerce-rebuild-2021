import express from 'express'
import asyncHandler from 'express-async-handler'
import Users from '../models/Users.js'
import authUser from '../controllers/userController.js'

const router = express.Router()

router.post('/login', authUser)

export default router
