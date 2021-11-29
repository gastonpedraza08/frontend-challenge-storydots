import { types } from 'types/types';

const initialState = () => {
	let userLS = JSON.parse(localStorage.getItem('user'));
	let user = null;
	let isLoggedIn = false;

	if (userLS!=='null') {
		user = userLS;
		isLoggedIn = true;
	}
	
	return {
		user,
		isLoggedIn
	}
};

export const userReducer = (state = initialState(), action) => {
	switch (action.type) {
		case types.userLogin:
			return {
				...state,
				isLoggedIn: true,
				user: action.payload.user
			};
		case types.userLogout:
			return initialState;
		default:
			return state;
	}
};
