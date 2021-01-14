import React from 'react';
import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';

import { ThemeContainer, MainLayout } from '@root/components';

interface ProfileProps {
	cookies?: string;
}

const Profile: React.FC<ProfileProps> = ({ cookies = '' }) => {
	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa - Profile</title>
			</Head>
			<MainLayout>
				<Heading> Profile Heading </Heading>
				<Text> Profile Text </Text>
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

export default Profile;
