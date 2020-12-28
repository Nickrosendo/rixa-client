import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@root/themes/default-theme';
import { Layout } from '@root/components';
import Home from '@root/pages/home';
import { defaultInitialState } from '@root/store';

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
