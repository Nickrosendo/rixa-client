import { User } from '../../helpers/interfaces';

// store state
export interface AuthState {
	loggedIn: boolean
	user?: User
}

// actions types
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

interface LoginAction {
	type: typeof LOGIN
	payload: User
} 

interface LogoutAction {
	type: typeof LOGOUT
	payload: User
} 
export type AuthActionTypes = LoginAction | LogoutAction
