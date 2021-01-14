import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';

// import { WithPrivateRoute } from '@root/high-order-components';
import { initializeApollo } from '@root/graphql';
import { GET_ALL_CHALLENGES } from '@root/graphql/queries';
import {
	ThemeContainer,
	MainLayout,
	ChallengeListItem,
} from '@root/components';

interface ChallengeListProps {
	cookies?: string;
}

const ChallengeList: React.FC<ChallengeListProps> = ({ cookies = '' }) => {
	const {
		loading: loadingChallenges,
		error: errorChallenges,
		data: challengesQueryData,
	} = useQuery(GET_ALL_CHALLENGES);
	const challenges = challengesQueryData?.getAllChallenges;

	if (errorChallenges) return <div>Error loading challenges.</div>;
	if (loadingChallenges) return <div>Loading</div>;

	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Challenge List</title>
			</Head>
			<MainLayout>
				{challenges &&
					challenges.map &&
					challenges.map((challenge: any) => {
						return <ChallengeListItem item={challenge} key={challenge.id} />;
					})}
			</MainLayout>
		</ThemeContainer>
	);
};

export async function getServerSideProps({ req }) {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: GET_ALL_CHALLENGES,
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
