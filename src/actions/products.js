import { types } from 'types/types';
import { fetchWithoutToken } from 'helpers/fetch';
import {
	uiStartLoadingAllProducts,
	uiStopLoadingAllProducts,
	uiStartLoadingAllProductsAdmin,
	uiStopLoadingAllProductsAdmin,
} from 'actions/ui';
import Swal from 'sweetalert2';


export const productsLoadAllproducts = () => {
	return async (dispatch, currentState) => {
		const { params, products } = currentState().products;
		const { limit, order } = params;
		dispatch(uiStartLoadingAllProducts());
		let endpoint = `products?limit=${limit}&order=${order}&offset=${products.length}`;
		const result = await fetchWithoutToken(endpoint, 'GET');
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

export const clearAllProducts = () => ({
	type: types.productsClearAllproducts	
})


export const productsLoadProductsAdmin = (page, pageSize) => {
	return async (dispatch) => {
		let nPage = Number(page) + 1;
		dispatch(uiStartLoadingAllProductsAdmin());
		const result = await fetchWithoutToken(`products?page=${nPage}&limit=${pageSize}`);
		if (!result.error) {
			dispatch({
				type: types.productsLoadProductsAdmin,
				payload: {
					productsAdmin: result.data.products,
					count: result.data.count
				},
			});
			dispatch(uiStopLoadingAllProductsAdmin());
		} else {
			dispatch(uiStopLoadingAllProductsAdmin(result.error));
		}
	}
}

export const productsDeleteProduct = (id) => {
  return async (dispatch) => {
    Swal.fire({
      title: "¿Seguro que quieres eliminar este producto?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        Swal.getCancelButton().style.display = "none";
        const result = await fetchWithoutToken(`products/${id}`, {}, "DELETE");
        if (!result.error) {
          dispatch({
            type: types.productsDeleteProductAdmin,
            payload: {
              id,
            },
          });
          Swal.fire("Correcto!", "Producto eliminado correctamente", "success");
        } else {
          Swal.fire({
            icon: "error",
            title: "No se pudo eliminar el producto",
            text: result.error,
          });
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };
};


export const productsCreateProduct = (data, cleanForm) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Cargando",
      text: "Guardando Producto",
      didOpen: async () => {
        Swal.showLoading();
      	const result = await fetchWithoutToken('products', data, 'POST');
        if (!result.error) {
          Swal.fire("Correcto!", "Producto creado correctamente", "success");
          console.log(result.data)
          cleanForm();
        } else {
          Swal.fire({
            icon: "error",
            title: "No se pudo crear el producto",
            text: result.error,
          });
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
	};
}