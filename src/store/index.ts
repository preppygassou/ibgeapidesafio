import { legacy_createStore as createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from "../reducers/RootReducer";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
