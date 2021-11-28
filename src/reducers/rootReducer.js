import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { productsReducer } from './productsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  products: productsReducer,
});
