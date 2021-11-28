import { types } from 'types/types';

const initialState = {
	products: [],
	params: {
		limit: 12,
		order: 'DESC',
		page: 1
	}
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.productsLoadAllproducts:
			return {
				...state,
				products: action.payload.products,
			};
		default:
			return state;
	}
};
