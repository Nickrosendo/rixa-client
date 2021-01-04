import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import Home from '@root/pages/home';
import { useApollo } from '@root/hooks';

const MyApp: React.FC<AppProps> = ({ Component = Home, pageProps = {} }) => {
	const apolloClient = useApollo(pageProps.initialApolloState);
	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

export default MyApp;
