import { combineReducers } from 'redux';
import {
	productDetailsReducer,
	productListReducer,
} from './reducers/productReducers';

import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

export default reducer;
