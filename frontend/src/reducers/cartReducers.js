import * as c from '../actions/constants';

export const cartReducer = (
	state = { cartItems: [], shippingAddress: {}, paymentMethod: null },
	action
) => {
	switch (action.type) {
		case c.CART_ADD_ITEM:
			const item = action.payload;
			const existItem = state.cartItems.find((x) => x.product === item.product);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case c.CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.product !== action.payload),
			};
		case c.CART_RESET:
			return {
				cartItems: [],
			};
		case c.CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
		case c.CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};
		default:
			return state;
	}
};
