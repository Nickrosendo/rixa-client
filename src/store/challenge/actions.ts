import { Challenge, ChallengeListItem } from '@root/helpers/interfaces';

import { LIST_CHALLENGES, OPEN_CHALLENGE, ChallengeActionTypes } from './types';

export function listChallenges(
	challengesList: Array<ChallengeListItem>,
): ChallengeActionTypes {
	return {
		type: LIST_CHALLENGES,
		payload: challengesList,
	};
}

export function openChallenge(challenge: Challenge): ChallengeActionTypes {
	return {
		type: OPEN_CHALLENGE,
		payload: challenge,
	};
}
