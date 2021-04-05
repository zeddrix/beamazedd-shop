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

export const orderDetailsReducer = (
	state = { loading: true, orderItems: [], shippingAddress: {} },
	action
) => {
	switch (action.type) {
		case c.ORDER_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case c.ORDER_DETAILS_SUCCESS:
			return {
				loading: false,
				order: action.payload,
			};
		case c.ORDER_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const orderPayReducer = (state = {}, action) => {
	switch (action.type) {
		case c.ORDER_PAY_REQUEST:
			return {
				loading: true,
			};
		case c.ORDER_PAY_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case c.ORDER_PAY_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case c.ORDER_PAY_RESET:
			return {};
		default:
			return state;
	}
};

export const getMyOrderReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case c.GET_MY_ORDER_REQUEST:
			return {
				loading: true,
			};
		case c.GET_MY_ORDER_SUCCESS:
			return {
				loading: false,
				orders: action.payload,
			};
		case c.GET_MY_ORDER_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case c.GET_MY_ORDER_RESET:
			return {
				orders: [],
			};
		default:
			return state;
	}
};

export const orderListReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case c.ORDER_LIST_REQUEST:
			return {
				loading: true,
			};
		case c.ORDER_LIST_SUCCESS:
			return {
				loading: false,
				orders: action.payload,
			};
		case c.ORDER_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
