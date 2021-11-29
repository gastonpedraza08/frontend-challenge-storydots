import { types } from 'types/types';
import { fetchWithoutToken } from 'helpers/fetch';
import Swal from 'sweetalert2';
import { privateRoutes } from 'config/routes';

export const userLogin = ({ email, password }, navigate) => {
	return async (dispatch) => {
		if (email==='testuser@gmail.com' && password==='1234') {
			let user = {
				email,
			}
			localStorage.setItem('user', JSON.stringify(user));
			navigate(localStorage.getItem('lastLocation') || '/');
			dispatch({
				type: types.userLogin,
				payload: {
					user
				},
			});
		} else {
			Swal.fire({
			  icon: 'error',
			  title: 'Oops...',
			  text: 'Credenciales invalidas',
			})
		}
	};
};

export const userLogout = (location, navigate) => {
	localStorage.removeItem('user');
	return async (dispatch) => {
		dispatch({
			type: types.userLogout
		});
		if (privateRoutes.includes(location.pathname)) {
			navigate('/');
		}
	}
}
