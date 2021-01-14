import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';

import { ThemeContainer, MainLayout } from '@root/components';

function Terms({ cookies = '' }) {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Terms of use</title>
			</Head>
			<MainLayout>
				<Heading> Terms Heading </Heading>
				<Text> Terms Text </Text>
			</MainLayout>
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
