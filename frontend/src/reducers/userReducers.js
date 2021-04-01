import * as c from '../actions/constants';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case c.USER_LOGIN_REQUEST:
			return {
				loading: true,
			};
		case c.USER_LOGIN_SUCCESS:
			return {
				loading: false,
				userInfo: action.payload,
			};
		case c.USER_LOGIN_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case c.USER_LOGOUT:
			return {};
		default:
			return state;
	}
};
