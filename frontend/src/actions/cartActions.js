import axios from 'axios';
import * as c from './constants';

export const addToCart = (id, qty) => async (dispatch) => {
	const { data } = await axios.get(`/api/products/${id}`);

	dispatch({
		type: c.CART_ADD_ITEM,
		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		},
	});
};

export const removeFromCart = (id) => (dispatch) => {
	dispatch({
		type: c.CART_REMOVE_ITEM,
		payload: id,
	});
};

export const saveShippingAddress = (data) => (dispatch) => {
	dispatch({
		type: c.CART_SAVE_SHIPPING_ADDRESS,
		payload: data,
	});
};

export const savePaymentMethod = (data) => (dispatch) => {
	dispatch({
		type: c.CART_SAVE_PAYMENT_METHOD,
		payload: data,
	});
};
