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
		dispatch({
			type: c.ORDER_CREATE_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
