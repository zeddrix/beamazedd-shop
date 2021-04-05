import { combineReducers } from 'redux';

import {
	productDeleteReducer,
	productDetailsReducer,
	productListReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
	userDeleteReducer,
	userDetailsReducer,
	userListReducer,
	userLoginReducer,
	userRegisterReducer,
	userUpdateProfileReducer,
	userUpdateReducer,
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
	productDelete: productDeleteReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	myOrder: getMyOrderReducer,
});

export default reducer;
