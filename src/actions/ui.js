import { types } from 'types/types';

export const uiStartLoadingAllProducts = () => ({
	type: types.uiStartLoadingAllProducts,
});

export const uiStopLoadingAllProducts = (error) => ({
	type: types.uiStopLoadingAllProducts,
	payload: error
});

export const uiStartLoadingAllProductsAdmin = () => ({
	type: types.uiStartLoadingAllProductsAdmin,
});

export const uiStopLoadingAllProductsAdmin = (error) => ({
	type: types.uiStopLoadingAllProductsAdmin,
	payload: error
});