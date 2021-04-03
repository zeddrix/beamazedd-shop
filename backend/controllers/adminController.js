import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

// @desc    Get all users
// @route   GET /api/users/
// @access  Private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		await user.remove();
		res.json({ msg: 'User removed successfully' });
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

export { getAllUsers, deleteUser };
