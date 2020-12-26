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
			<h1 className="test-1 test-2 test-3 test-4 test-5 test-6" id="test">
				Hello World
			</h1>
			<ThemeProvider theme={defaultTheme}>
				<Button> teste </Button>
			</ThemeProvider>
		</Layout>
	);
}
