import express from 'express';
import {
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
} from '../controllers/adminController.js';
const router = express.Router();
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(protect, admin, getAllUsers);
router
	.route('/:id')
	.delete(protect, admin, deleteUser)
	.get(protect, admin, getUserById)
	.put(protect, admin, updateUser);

export default router;
