import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { Container } from '@chakra-ui/react';

// import { WithPrivateRoute } from '@root/high-order-components';
import { initializeApollo } from '@root/graphql';
import { ALL_CHALLENGES_QUERY } from '@root/graphql/queries';
import { ThemeContainer, HeaderMenu } from '@root/components';

interface ChallengeListProps {
	cookies?: string;
}

const ChallengeList: React.FC<ChallengeListProps> = ({ cookies = '' }) => {
	const {
		loading: loadingChallenges,
		error: errorChallenges,
		data: challengesQueryData,
	} = useQuery(ALL_CHALLENGES_QUERY);
	const challenges = challengesQueryData.queryChallenge;

	if (errorChallenges) return <div>Error loading challenges.</div>;
	if (loadingChallenges) return <div>Loading</div>;

	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Challenge History</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />

				{challenges &&
					challenges.map &&
					challenges.map((challenge: any) => {
						return <p key={challenge.id}> title: {challenge.title} </p>;
					})}
			</Container>
		</ThemeContainer>
	);
};

export async function getServerSideProps({ req }) {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ALL_CHALLENGES_QUERY,
	});

	const initialApolloState = apolloClient.cache.extract();

	return {
		props: {
			initialApolloState,
			cookies: req.headers.cookie ?? '',
		},
	};
}

export default ChallengeList;
