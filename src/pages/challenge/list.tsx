import Head from 'next/head';
import { useQuery } from '@apollo/client';

// import { WithPrivateRoute } from '@root/high-order-components';
import { initializeApollo } from '@root/graphql';
import { ALL_CHALLENGES_QUERY } from '@root/graphql/queries';
import { ThemeContainer } from '@root/components';

function ChallengeList({ cookies = '' }) {
	const {
		loading: loadingChallenges,
		error: errorChallenges,
		data: challengesQueryData,
	} = useQuery(ALL_CHALLENGES_QUERY);
	const challenges = challengesQueryData.queryChallenge;

	if (errorChallenges) return <div>Error loading challenges.</div>;
	if (loadingChallenges) return <div>Loading</div>;

	console.log('challenges: ', challenges);

	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Challenge History</title>
			</Head>
			<h1>Challenge History</h1>

			{challenges &&
				challenges.map &&
				challenges.map((challenge: any) => {
					return <p key={challenge.id}> title: {challenge.title} </p>;
				})}
		</ThemeContainer>
	);
}

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
