import React from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';

// import { WithPrivateRoute } from '@root/high-order-components';
import { ThemeContainer, HeaderMenu } from '@root/components';

interface BalanceProps {
	cookies?: string;
}

const Balance: React.FC<BalanceProps> = ({ cookies = '' }) => {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Balance</title>
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

export default Balance;
