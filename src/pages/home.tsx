import React from 'react';
import Head from 'next/head';
import { Container, Heading, Box, Button, Icon } from '@chakra-ui/react';

import { MdArrowDownward } from 'react-icons/md';

import {
	ThemeContainer,
	HeaderMenu,
	ContentGallery,
	ImageCardGroup,
	RankList,
	Footer,
} from '@root/components';

import {
	MockRankList,
	MockPartnersStreams,
	MockOnboardingCards,
} from '@root/helpers/mocks';

interface HomeProps {
	cookies?: string;
}

const Home: React.FC<HomeProps> = ({ cookies = '' }) => {
	const partnersSteams = MockPartnersStreams;
	const onboardingCards = MockOnboardingCards;
	const rankList = MockRankList;

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
					<Heading>Bem Vindo ao Rixa, uma nova forma de jogar.</Heading>
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

				<RankList list={rankList} title="Rank de players" />
				<Footer />
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
