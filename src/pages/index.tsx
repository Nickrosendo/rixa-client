import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import Button from '../components/button';
import { defaultTheme } from '../themes/default-theme';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Rixa</title>
			</Head>
			<h1>Hello World</h1>
			<ThemeProvider theme={defaultTheme}>
				<Button> teste </Button>
			</ThemeProvider>
		</Layout>
	);
}
