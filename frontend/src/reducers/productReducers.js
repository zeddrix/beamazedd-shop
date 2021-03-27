import * as c from '../actions/constants';

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case c.PRODUCT_LIST_REQUEST:
			return {
				loading: true,
				products: [],
			};
		case c.PRODUCT_LIST_SUCCESS:
			return {
				loading: false,
				products: action.payload,
			};
		case c.PRODUCT_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};