import React from 'react';
import Head from 'next/head';
import { Container, Heading, Text } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';

// import { WithPrivateRoute } from '@root/high-order-components';
import { ThemeContainer, MainLayout } from '@root/components';
import { initializeApollo } from '@root/graphql';
import { GET_CHALLENGE_BY_ID } from '@root/graphql/queries';

interface ChallengeRoomProps {
	cookies?: string;
	challengeRoomId?: string;
	initialApolloState: any;
}

const ChallengeRoom: React.FC<ChallengeRoomProps> = ({
	cookies = '',
	challengeRoomId = '',
	initialApolloState = undefined,
}) => {
	console.log('initialApolloState: ', initialApolloState);
	const {
		loading: loadingChallengeQuery,
		error: errorChallengeQuery,
		data: challengeQueryData,
	} = useQuery(GET_CHALLENGE_BY_ID, {
		variables: { id: challengeRoomId },
	});
	const challengeRoom = challengeQueryData?.getChallengeById;

	if (errorChallengeQuery) return <div>Error loading challenges.</div>;
	if (loadingChallengeQuery) return <div>Loading</div>;

	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Challenge</title>
			</Head>
			<MainLayout>
				<Heading> Challenge Room Heading </Heading>
				<Text> Challenge Room text</Text>

				{challengeRoom && <Heading> {challengeRoom.creator.nickname} </Heading>}

				{challengeRoom && <Text> Total: {challengeRoom.totalPrize} </Text>}
			</MainLayout>
		</ThemeContainer>
	);
};

export async function getServerSideProps({ req, query }) {
	const { id: challengeRoomId } = query;
	const apolloClient = initializeApollo();
	await apolloClient.query({
		query: GET_CHALLENGE_BY_ID,
		variables: { id: challengeRoomId },
	});

	return {
		props: {
			cookies: req.headers.cookie ?? '',
			challengeRoomId,
		},
	};
}

export default ChallengeRoom;
