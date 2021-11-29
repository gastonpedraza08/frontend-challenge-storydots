import { types } from 'types/types';

const initialState = {
	products: [],
	productsAdmin: {
		products: [],
		count: 0
	},
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
		case types.productsLoadProductsAdmin:
			return {
				...state,
				productsAdmin: {
					products: action.payload.productsAdmin,
					count: action.payload.count
				},
			};
		default:
			return state;
	}
};
