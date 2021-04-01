import { combineReducers } from 'redux';

import {
	productDetailsReducer,
	productListReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
	userDetailsReducer,
	userLoginReducer,
	userRegisterReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
});

export default reducer;
