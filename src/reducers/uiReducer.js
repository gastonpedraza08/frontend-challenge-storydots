import { types } from '../types/types';

const initialState = {
	uiLoadingAllProducts: {
		isLoading: true,
		error: false,
	},
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.uiStartLoadingAllProducts:
			return {
				...state,
				uiLoadingAllProducts: {
					isLoading: true,
					error: null
				}
			};
		case types.uiStopLoadingAllProducts:
			return {
				...state,
				uiLoadingAllProducts: {
					isLoading: false,
					error: action.payload
				}
			};
		default:
			return state;
	}
};