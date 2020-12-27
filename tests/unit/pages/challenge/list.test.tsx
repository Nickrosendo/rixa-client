import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Store } from 'redux';
import { ThemeProvider } from 'styled-components';

import ChallengeList from '@root/pages/challenge/list';
import { defaultInitialState } from '@root/store';
import { defaultTheme } from '@root/themes/default-theme';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Test Challenge List page', () => {
	let store: Store;
	beforeEach(() => {
		store = mockStore(defaultInitialState);
	});
	it('renders children text', () => {
		const wrapper = mount(
			<Provider store={store}>
				<ThemeProvider theme={defaultTheme}>
					<ChallengeList />
				</ThemeProvider>
			</Provider>,
		);
		expect(wrapper.find('h1').text()).toEqual('Challenge List');
	});
});
