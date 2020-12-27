import {
	ChallengeState,
	LIST_CHALLENGES,
	OPEN_CHALLENGE,
	ChallengeActionTypes,
} from './types';

const initialState: ChallengeState = {
	challengesList: undefined,
	currentChallenge: undefined,
};

export function challengeReducer(
	state = initialState,
	action: ChallengeActionTypes,
): ChallengeState {
	switch (action.type) {
		case OPEN_CHALLENGE:
			return {
				...state,
				currentChallenge: action.payload,
			};
		case LIST_CHALLENGES:
			return {
				...state,
				challengesList: action.payload,
			};
		default:
			return state;
	}
}
