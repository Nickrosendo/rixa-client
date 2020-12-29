import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let apolloClient: any;

function _createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: 'https://quixotic-poison.us-west-2.aws.cloud.dgraph.io/graphql',
		}),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? _createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();
		// Restore the cache using the data passed from getStaticProps/getServerSideProps
		// combined with the existing cached data
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}
	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient;
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}
