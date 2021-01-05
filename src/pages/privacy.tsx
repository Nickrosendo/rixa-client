import Head from 'next/head';
import { Container, Heading, Text } from '@chakra-ui/react';

import { ThemeContainer, HeaderMenu } from '@root/components';

function PrivacyPolicy({ cookies = '' }) {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - PrivacyPolicy</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />
				<Heading> PrivacyPolicy Heading </Heading>
				<Text> PrivacyPolicy Text </Text>
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

export default PrivacyPolicy;
