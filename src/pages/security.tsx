import React from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';

import { ThemeContainer, HeaderMenu } from '@root/components';

interface SecurityProps {
	cookies?: string;
}

const Security: React.FC<SecurityProps> = ({ cookies = '' }) => {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Security</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />
			</Container>
		</ThemeContainer>
	);
};

export default Security;
