import { types } from 'types/types';

export const uiStartLoadingAllProducts = () => ({
	type: types.uiStartLoadingAllProducts,
});

export const uiStopLoadingAllProducts = (error) => ({
	type: types.uiStopLoadingAllProducts,
	payload: error
});