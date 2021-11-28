import { types } from 'types/types';

const initialState = {
	user: {
		email: ''
	},
	isLoggedIn: false
};

export const userReducer = (state = initialState, action) => {
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
