import React from 'react';
import Head from 'next/head';
import { Container, Button } from '@chakra-ui/react';

import { ThemeContainer, HeaderMenu } from '@root/components';

function Home({ cookies = '' }) {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />

				<Button isLoading={false} mt="1rem">
					Brand Themed Button
				</Button>

				<h1>Hello World</h1>
			</Container>
		</ThemeContainer>
	);
}

export async function getServerSideProps({ req }) {
	return {
		props: {
			cookies: req.headers.cookie ?? '',
		},
	};
}

export default Home;
