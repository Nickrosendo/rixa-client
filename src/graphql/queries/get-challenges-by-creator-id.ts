import { gql } from '@apollo/client';

export const GET_CHALLENGES_BY_CREATOR_ID = gql`
	query getChallengesByCreatorId($creatorId: String!) {
		getChallengesByCreatorId(creatorId: $creatorId) {
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
