import { AuthState, LOGIN, LOGOUT, AuthActionTypes } from './types';

const initialState: AuthState = {
	loggedIn: false,
	user: undefined,
};

export function authReducer(
	state = initialState,
	action: AuthActionTypes,
): AuthState {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				loggedIn: true,
				user: action.payload,
			};
		case LOGOUT:
			return {
				...state,
				loggedIn: false,
				user: undefined,
			};
		default:
			return state;
	}
}
