import React from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';

import { ThemeContainer, HeaderMenu } from '@root/components';

interface ProfileProps {
	cookies?: string;
}

const Profile: React.FC<ProfileProps> = ({ cookies = '' }) => {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Profile</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />
			</Container>
		</ThemeContainer>
	);
};

export default Profile;
