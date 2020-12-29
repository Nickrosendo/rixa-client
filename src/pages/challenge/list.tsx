import Head from 'next/head';
import { useQuery } from '@apollo/client';

// import { WithPrivateRoute } from '@root/high-order-components';
import { initializeApollo } from '@root/graphql';
import { ALL_CHALLENGES_QUERY } from '@root/graphql/queries';

function ChallengeList() {
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
		<>
			<Head>
				<title>Rixa - Challenge History</title>
			</Head>
			<h1>Challenge History</h1>

			{challenges &&
				challenges.map &&
				challenges.map((challenge: any) => {
					return <p key={challenge.id}> title: {challenge.title} </p>;
				})}
		</>
	);
}

export async function getServerSideProps() {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ALL_CHALLENGES_QUERY,
	});

	const initialApolloState = apolloClient.cache.extract();
	console.log('initialApolloState: ', initialApolloState);

	return {
		props: {
			initialApolloState,
		},
	};
}

export default ChallengeList;
