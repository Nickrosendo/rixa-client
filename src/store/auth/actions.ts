import { User } from '../../helpers/interfaces';
import { LOGIN, LOGOUT, AuthActionTypes } from './types';

export function login(user: User): AuthActionTypes {
	return {
		type: LOGIN,
		payload: user,
	};
}

export function logout(user: User): AuthActionTypes {
	return {
		type: LOGOUT,
		payload: user,
	};
}
