import * as c from './constants';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: c.PRODUCT_LIST_REQUEST,
		});

		const { data } = await axios.get('/api/products');

		dispatch({
			type: c.PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: c.PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({
			type: c.PRODUCT_DETAILS_REQUEST,
		});

		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({
			type: c.PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: c.PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteProduct = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: c.PRODUCT_DELETE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`/api/products/${id}`, config);

		dispatch({
			type: c.PRODUCT_DELETE_SUCCESS,
		});
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({
			type: c.PRODUCT_DELETE_FAIL,
			payload: message,
		});
	}
};

export const createProduct = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: c.PRODUCT_CREATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(`/api/products/`, {}, config);

		dispatch({
			type: c.PRODUCT_CREATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({
			type: c.PRODUCT_CREATE_FAIL,
			payload: message,
		});
	}
};

export const updateProduct = (product) => async (dispatch, getState) => {
	try {
		dispatch({
			type: c.PRODUCT_UPDATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`/api/products/${product._id}`,
			product,
			config
		);

		dispatch({
			type: c.PRODUCT_UPDATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({
			type: c.PRODUCT_UPDATE_FAIL,
			payload: message,
		});
	}
};

export const createProductReview = (productId, review) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: c.PRODUCT_CREATE_REVIEW_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.post(`/api/products/${productId}/reviews`, review, config);

		dispatch({
			type: c.PRODUCT_CREATE_REVIEW_SUCCESS,
		});
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({
			type: c.PRODUCT_CREATE_REVIEW_FAIL,
			payload: message,
		});
	}
};
