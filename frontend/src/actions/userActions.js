import * as c from './constants';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: c.USER_LOGIN_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/api/users/login',
			{ email, password },
			config
		);

		dispatch({
			type: c.USER_LOGIN_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: c.USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
