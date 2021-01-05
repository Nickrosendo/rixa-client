import Head from 'next/head';
import { Container, Heading, Text } from '@chakra-ui/react';

import { ThemeContainer, HeaderMenu } from '@root/components';

function Terms({ cookies = '' }) {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Terms of use</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />
				<Heading> Terms Heading </Heading>
				<Text> Terms Text </Text>
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

export default Terms;
