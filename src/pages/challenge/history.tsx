import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';

// import { WithPrivateRoute } from '@root/high-order-components';
import { initializeApollo } from '@root/graphql';
import { GET_CHALLENGES_BY_CREATOR_ID } from '@root/graphql/queries';
import { ThemeContainer, MainLayout } from '@root/components';

interface ChallengeHistoryProps {
	cookies?: string;
}

const ChallengeHistory: React.FC<ChallengeHistoryProps> = ({
	cookies = '',
}) => {
	const {
		loading: loadingChallenges,
		error: errorChallenges,
		data: challengesQueryData,
	} = useQuery(GET_CHALLENGES_BY_CREATOR_ID, { variables: { creatorId: '2' } });
	const challenges = challengesQueryData?.getChallengesByCreatorId;

	if (errorChallenges) return <div>Error loading challenges.</div>;
	if (loadingChallenges) return <div>Loading</div>;

	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Challenge History</title>
			</Head>
			<MainLayout>
				{challenges &&
					challenges.map &&
					challenges.map((challenge: any) => {
						return <p key={challenge.id}> title: {challenge.title} </p>;
					})}
			</MainLayout>
		</ThemeContainer>
	);
};

export async function getServerSideProps({ req }) {
	const apolloClient = initializeApollo();
	try {
		await apolloClient.query({
			query: GET_CHALLENGES_BY_CREATOR_ID,
			variables: { creatorId: '2' },
		});
	} catch (err) {
		if (err) {
			console.error('Error on graphql query: ', err);
		}
	}

	const initialApolloState = apolloClient.cache.extract();

	return {
		props: {
			initialApolloState,
			cookies: req.headers.cookie ?? '',
		},
	};
}

export default ChallengeHistory;
