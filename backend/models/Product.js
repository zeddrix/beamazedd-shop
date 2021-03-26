import mongoose from 'mongoose';

const ReviewSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		name: { comment: String, required: true },
	},
	{ timestamps: true }
);

const ProductSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		reviews: [ReviewSchema],
		rating: {
			type: String,
			required: true,
			default: 0,
		},
		numReviews: {
			type: String,
			required: true,
			default: 0,
		},
		price: {
			type: String,
			required: true,
			default: 0,
		},
		countInStock: {
			type: String,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('Product', ProductSchema);

export default Product;
