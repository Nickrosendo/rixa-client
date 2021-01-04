import React from 'react';
import Head from 'next/head';
import { Container, Button, DarkMode } from '@chakra-ui/react';

import { ThemeContainer, ToggleColorMode, HeaderMenu } from '@root/components';

function Home({ cookies = '' }) {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />
				<h1>Hello World</h1>
				<ToggleColorMode />

				<DarkMode>
					<Button isLoading={false} colorScheme="brand" color="#fff">
						Brand Themed Button
					</Button>
				</DarkMode>
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
