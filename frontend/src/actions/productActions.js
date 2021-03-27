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
	} catch (err) {
		dispatch({
			type: c.PRODUCT_LIST_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
