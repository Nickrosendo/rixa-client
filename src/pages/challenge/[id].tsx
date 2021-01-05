import React from 'react';
import Head from 'next/head';
import { NextPageContext } from 'next';
import { Container } from '@chakra-ui/react';

import { WithPrivateRoute } from '@root/high-order-components';
import { ThemeContainer, HeaderMenu } from '@root/components';

interface ChallengeRoomProps extends NextPageContext {
	cookies?: string;
}

const ChallengeRoom: React.FC<ChallengeRoomProps> = ({ cookies = '' }) => {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Challenge</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />
			</Container>
		</ThemeContainer>
	);
};

export async function getServerSideProps({ req }) {
	return {
		props: {
			cookies: req.headers.cookie ?? '',
		},
	};
}

export default WithPrivateRoute(ChallengeRoom);
