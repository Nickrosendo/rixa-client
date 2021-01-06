import React from 'react';
import Head from 'next/head';
import { Container, Heading, Text } from '@chakra-ui/react';

import { ThemeContainer, HeaderMenu, ContentGallery } from '@root/components';

interface HomeProps {
	cookies?: string;
}

const Home: React.FC<HomeProps> = ({ cookies = '' }) => {
	const partnersSteams = [];

	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />

				<Heading> Home Heading </Heading>
				<Text> Home Text </Text>

				{partnersSteams && partnersSteams.length > 0 && (
					<ContentGallery items={partnersSteams} title="Partners Streams" />
				)}
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

export default Home;
