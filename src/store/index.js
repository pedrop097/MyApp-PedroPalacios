import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { categoriesReducer, productsReducer, cartReducer } from "./reducers/index";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));