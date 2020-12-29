import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { defaultTheme } from '@root/themes/default-theme';
import { Layout } from '@root/components';
import Home from '@root/pages/home';
import { useApollo } from '@root/hooks';

const MyApp: React.FC<AppProps> = ({ Component = Home, pageProps = {} }) => {
	const apolloClient = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={apolloClient}>
			<Layout>
				<ThemeProvider theme={defaultTheme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</Layout>
		</ApolloProvider>
	);
};

export default MyApp;
