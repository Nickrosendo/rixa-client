import React from 'react';
import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';

import { ThemeContainer, MainLayout } from '@root/components';

interface SecurityProps {
	cookies?: string;
}

const Security: React.FC<SecurityProps> = ({ cookies = '' }) => {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Security</title>
			</Head>
			<MainLayout>
				<Heading> Security Heading </Heading>
				<Text> Security Text </Text>
			</MainLayout>
		</ThemeContainer>
	);
};

export default Security;
