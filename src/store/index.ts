import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { challengeReducer } from './challenge/reducers';
import { authReducer } from './auth/reducers';
import { AuthState } from './auth/types'
import { ChallengeState } from './challenge/types'

const rootReducer = combineReducers({
	challengeReducer,
	authReducer,
});

export function initializeStore(initialState = {}) {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk)),
	);
}

export interface DefaultInitialState {
	challengeReducer: ChallengeState 
	authReducer: AuthState
}

export const defaultInitialState: DefaultInitialState = {
	challengeReducer: { challengesList: undefined, currentChallenge: undefined },
	authReducer: {
		loggedIn: false,
		user: undefined,
	},
};
