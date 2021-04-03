import { combineReducers } from 'redux';

import {
	productDetailsReducer,
	productListReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
	userDetailsReducer,
	userListReducer,
	userLoginReducer,
	userRegisterReducer,
	userUpdateProfileReducer,
} from './reducers/userReducers';
import {
	getMyOrderReducer,
	orderCreateReducer,
	orderDetailsReducer,
	orderPayReducer,
} from './reducers/orderReducers';

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userList: userListReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	myOrder: getMyOrderReducer,
});

export default reducer;
