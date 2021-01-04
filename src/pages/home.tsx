import React from 'react';
import Head from 'next/head';
import { Button, DarkMode } from '@chakra-ui/react';

import { ThemeContainer, ToggleColorMode } from '@root/components';

function Home({ cookies = '' }) {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa</title>
			</Head>
			<h1>Hello World</h1>
			<ToggleColorMode />

			<DarkMode>
				<Button isLoading={false} colorScheme="brand" color="#fff">
					Brand Themed Button
				</Button>
			</DarkMode>
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
