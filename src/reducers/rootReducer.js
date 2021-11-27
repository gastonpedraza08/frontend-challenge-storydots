import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  products: productsReducer,
});
