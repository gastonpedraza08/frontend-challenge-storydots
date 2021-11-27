import { types } from 'types/types';
import { fetchWithoutToken } from 'helpers/fetch';
import {
	uiStartLoadingAllProducts,
	uiStopLoadingAllProducts,
} from 'actions/ui';
import Swal from 'sweetalert2';


export const productsLoadAllproducts = () => {
	return async (dispatch) => {
		dispatch(uiStartLoadingAllProducts());
		const result = await fetchWithoutToken('products', 'GET');
		if (!result.error) {
			dispatch({
				type: types.productsLoadAllproducts,
				payload: {
					products: result.data.products
				},
			});
			dispatch(uiStopLoadingAllProducts());
		} else {
			dispatch(uiStopLoadingAllProducts(result.error));
		}
	};
};