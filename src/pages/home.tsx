import React from 'react';
import Head from 'next/head';
import { NextPageContext } from 'next';
import { Container } from '@chakra-ui/react';

import { ThemeContainer, HeaderMenu } from '@root/components';

interface HomeProps extends NextPageContext {
	cookies?: string;
}

const Home: React.FC<HomeProps> = ({ cookies = '' }) => {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa</title>
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

export default Home;
