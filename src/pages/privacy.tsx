import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';

import { ThemeContainer, MainLayout } from '@root/components';

function PrivacyPolicy({ cookies = '' }) {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - PrivacyPolicy</title>
			</Head>
			<MainLayout>
				<Heading> PrivacyPolicy Heading </Heading>
				<Text> PrivacyPolicy Text </Text>
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

export default PrivacyPolicy;
