import React from 'react';
import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';

// import { WithPrivateRoute } from '@root/high-order-components';
import { ThemeContainer, HeaderMenu, MainLayout } from '@root/components';

interface ChallengeRoomProps {
	cookies?: string;
}

const ChallengeRoom: React.FC<ChallengeRoomProps> = ({ cookies = '' }) => {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Challenge</title>
			</Head>
			<MainLayout>
				<Heading> Challenge Room Heading </Heading>
				<Text> Challenge Room text</Text>
			</MainLayout>
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

export default ChallengeRoom;
