import React from 'react';
import Head from 'next/head';
import { Container, Heading, Box, Button, Icon } from '@chakra-ui/react';

import { MdArrowDownward } from 'react-icons/md';

import {
	ThemeContainer,
	HeaderMenu,
	ContentGallery,
	ImageCardProps,
	ImageCardGroup,
} from '@root/components';

interface HomeProps {
	cookies?: string;
}

const Home: React.FC<HomeProps> = ({ cookies = '' }) => {
	const partnersSteams = [
		{
			id: Math.random().toString(),
			imageSrc:
				'https://static-cdn.jtvnw.net/previews-ttv/live_user_gaules-440x248.jpg',
			imageAlt: 'test',
		},
		{
			id: Math.random().toString(),
			imageSrc:
				'https://static-cdn.jtvnw.net/previews-ttv/live_user_yoda-440x248.jpg',
			imageAlt: 'test',
		},
		{
			id: Math.random().toString(),
			imageSrc:
				'https://static-cdn.jtvnw.net/previews-ttv/live_user_gaules-440x248.jpg',
			imageAlt: 'test',
		},
		{
			id: Math.random().toString(),
			imageSrc:
				'https://static-cdn.jtvnw.net/previews-ttv/live_user_yoda-440x248.jpg',
			imageAlt: 'test',
		},
		{
			id: Math.random().toString(),
			imageSrc:
				'https://static-cdn.jtvnw.net/previews-ttv/live_user_gaules-440x248.jpg',
			imageAlt: 'test',
		},
		{
			id: Math.random().toString(),
			imageSrc:
				'https://static-cdn.jtvnw.net/previews-ttv/live_user_yoda-440x248.jpg',
			imageAlt: 'test',
		},
	];
	const onboardingCards: Array<ImageCardProps> = [
		{
			imageSrc:
				'https://cdn.dribbble.com/users/788099/screenshots/3248866/karate_guy_kit8-net.png?compress=1&resize=800x600',
			title:
				'Encontre oponentes para desafiar dentro do jogo e ganhe ranking com suas vitorias.',
		},
		{
			imageSrc:
				'https://cdn.dribbble.com/users/175710/screenshots/14512908/media/c178af39f8902d7e6f75bd9c98f247dc.png?compress=1&resize=800x600',
			title: 'Conecte sua conta e desafie seus amigos dentro do jogo.',
		},
	];

	return (
		<ThemeContainer cookies={cookies}>
			<Head>
				<title>Rixa</title>
			</Head>
			<Container maxW="6xl" centerContent>
				<HeaderMenu />

				<Box
					bg="white"
					p="2"
					color="brand.200"
					borderRadius="8px"
					display="flex"
					alignItems="center"
					flexDir="column"
				>
					<Heading>
						Bem Vindo ao Rixa, uma nova forma de jogar seus jogos.
					</Heading>
					<Button bg="brand.200" color="white" mt="2">
						Saiba mais
					</Button>
				</Box>

				{partnersSteams && partnersSteams.length > 0 && (
					<ContentGallery
						items={partnersSteams}
						title="Desafios em tempo real"
					/>
				)}

				<ImageCardGroup cards={onboardingCards} width="100%" height="400px" />

				<Icon as={MdArrowDownward} w={50} h={50} />
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

export default Home;
