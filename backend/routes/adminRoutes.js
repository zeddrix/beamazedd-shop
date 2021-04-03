import express from 'express';
import { getAllUsers } from '../controllers/adminController.js';
const router = express.Router();
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(protect, admin, getAllUsers);

export default router;
