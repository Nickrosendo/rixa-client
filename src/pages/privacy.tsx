import Head from 'next/head';
import { Container, Button } from '@chakra-ui/react';

import { ThemeContainer, HeaderMenu } from '@root/components';

function PrivacyPolicy({ cookies = '' }) {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - PrivacyPolicy</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />

				<h1>PrivacyPolicy</h1>
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
