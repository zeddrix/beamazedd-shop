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
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem('userInfo');
	dispatch({ type: c.USER_LOGOUT });
};
