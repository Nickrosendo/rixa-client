import { gql } from '@apollo/client';

export const ALL_CHALLENGES_QUERY = gql`
	query allChallenges {
		queryChallenge {
			id
			title
		}
	}
`;
