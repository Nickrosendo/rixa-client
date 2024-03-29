import React from 'react';
import Head from 'next/head';

import { Heading, Text } from '@chakra-ui/react';

// import { WithPrivateRoute } from '@root/high-order-components';
import { ThemeContainer, MainLayout } from '@root/components';

interface BalanceProps {
	cookies?: string;
}

const Balance: React.FC<BalanceProps> = ({ cookies = '' }) => {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Balance</title>
			</Head>

			<MainLayout>
				<Heading> Balance Heading </Heading>
				<Text> Balance Text </Text>
			</MainLayout>
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

export default Balance;
