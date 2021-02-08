import express from 'express'
const router =express.Router()
import { addOrderItems, getOrderbyId, updateOrderToPaid } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)

router.route('/:id').get(protect, getOrderbyId)


router.route('/:id/pay').put(protect, updateOrderToPaid)
export default router