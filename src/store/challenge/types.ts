import { ChallengeListItem, Challenge } from '@root/helpers/interfaces';

// store state
export interface ChallengeState {
	challengesList: Array<ChallengeListItem>;
	currentChallenge: Challenge;
}

// actions types
export const LIST_CHALLENGES = 'LIST_CHALLENGES';
export const OPEN_CHALLENGE = 'OPEN_CHALLENGE';

interface ListChallengesAction {
	type: typeof LIST_CHALLENGES;
	payload: Array<ChallengeListItem>;
}

interface OpenChallenge {
	type: typeof OPEN_CHALLENGE;
	payload: Challenge;
}

export type ChallengeActionTypes = ListChallengesAction | OpenChallenge;
