import * as c from '../actions/constants';

export const orderCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case c.ORDER_CREATE_REQUEST:
			return {
				loading: true,
			};
		case c.ORDER_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				order: action.payload,
			};
		case c.ORDER_CREATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
