import express from 'express';
const router = express.Router();
import {
	authUser,
	deleteUser,
	getAllUsers,
	getUserById,
	getUserProfile,
	registerUser,
	updateUser,
	updateUserProfile,
} from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getAllUsers);
router
	.route('/:id')
	.delete(protect, admin, deleteUser)
	.get(protect, admin, getUserById)
	.put(protect, admin, updateUser);
router.post('/login', authUser);
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

export default router;
