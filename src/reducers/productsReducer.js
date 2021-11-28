import { types } from 'types/types';

const initialState = {
	products: [],
	params: {
		limit: 12,
		order: 'DESC',
	}
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.productsLoadAllproducts:
			return {
				...state,
				products: state.products.concat(action.payload.products),
			};
		case types.productsClearAllproducts:
			return initialState;
		default:
			return state;
	}
};
