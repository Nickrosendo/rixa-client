import { gql } from '@apollo/client';

export const GET_CHALLENGE_BY_ID = gql`
	query getChallengeById($id: String!) {
		getChallengeById(id: $id) {
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
