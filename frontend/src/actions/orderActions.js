import * as c from './constants';
import axios from 'axios';

export const createOrder = (order) => async (dispatch, getState) => {
	try {
		dispatch({
			type: c.ORDER_CREATE_REQUEST,
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

		const { data } = await axios.post(`/api/orders`, order, config);

		dispatch({
			type: c.ORDER_CREATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({
			type: c.ORDER_DETAILS_FAIL,
			payload: message,
		});
	}
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: c.ORDER_DETAILS_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/orders/${id}`, config);

		dispatch({
			type: c.ORDER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({
			type: c.ORDER_DETAILS_FAIL,
			payload: message,
		});
	}
};

export const payOrder = (orderId, paymentResult) => async (
	dispatch,
	getState
) => {
	try {
		dispatch({
			type: c.ORDER_PAY_REQUEST,
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
			`/api/orders/${orderId}/pay`,
			paymentResult,
			config
		);

		dispatch({
			type: c.ORDER_PAY_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({
			type: c.ORDER_PAY_FAIL,
			payload: message,
		});
	}
};

export const listMyOrder = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: c.MY_ORDER_LIST_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/orders/myorders`, config);

		dispatch({
			type: c.MY_ORDER_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({
			type: c.MY_ORDER_LIST_FAIL,
			payload: message,
		});
	}
};

export const listOrders = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: c.ORDER_LIST_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/orders`, config);

		dispatch({
			type: c.ORDER_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch({
			type: c.ORDER_LIST_FAIL,
			payload: message,
		});
	}
};
