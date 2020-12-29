import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import ChallengeList from '@root/pages/challenge/list';
import { defaultTheme } from '@root/themes/default-theme';
import { useApollo } from '@root/hooks';

describe('Test Challenge List page', () => {
	it('renders children text', () => {
		const apolloClient = useApollo({});
		const wrapper = mount(
			<ApolloProvider client={apolloClient}>
				<ThemeProvider theme={defaultTheme}>
					<ChallengeList />
				</ThemeProvider>
				,
			</ApolloProvider>,
		);
		expect(wrapper.find('h1').text()).toEqual('Challenge List');
	});
});
