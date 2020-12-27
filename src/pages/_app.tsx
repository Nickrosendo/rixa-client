import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../themes/default-theme';
import Layout from '../components/layout';
import Home from './index';
import { defaultInitialState } from '../store';

const MyApp: React.FC<AppProps> = ({ Component = Home, pageProps = {} }) => {
	return (
		<Layout initialReduxState={defaultInitialState}>
			<ThemeProvider theme={defaultTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Layout>
	);
};

export default MyApp;
