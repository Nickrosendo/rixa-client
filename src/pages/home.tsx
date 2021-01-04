import Head from 'next/head';
import { Button } from '@chakra-ui/react';

function Home() {
	return (
		<>
			<Head>
				<title>Rixa</title>
			</Head>
			<h1>Hello World</h1>
			<Button isLoading={false} colorScheme="teal" variant="solid">
				{' '}
				Cakra Button{' '}
			</Button>
		</>
	);
}

export default Home;
