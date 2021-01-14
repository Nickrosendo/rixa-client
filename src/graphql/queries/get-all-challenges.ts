import { gql } from '@apollo/client';

export const GET_ALL_CHALLENGES = gql`
	query {
		getAllChallenges {
			id
			rank
			totalPrize
			creationDate
			title
			creator {
				id
				name
				nickname
				email
				creation
				avatarUrl
			}
			participants {
				id
				name
				nickname
				email
				creation
				avatarUrl
			}
			prizeItems {
				id
				value
				creator {
					id
					name
					nickname
					email
					creation
					avatarUrl
				}
			}
			creationDate
		}
	}
`;
