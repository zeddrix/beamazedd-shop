import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const middleware = [thunk];

const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(
	throttle(() => {
		saveState({
			cart: store.getState().cart,
			orderCreate: store.getState().orderCreate,
			userLogin: store.getState().userLogin,
		});
	})
);

export default store;
