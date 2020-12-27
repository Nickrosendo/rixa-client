import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Store } from 'redux';
import { ThemeProvider } from 'styled-components';

import Terms from '@root/pages/terms';
import { defaultInitialState } from '@root/store';
import { defaultTheme } from '@root/themes/default-theme';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Test Terms page', () => {
	let store: Store;
	beforeEach(() => {
		store = mockStore(defaultInitialState);
	});
	it('renders children text', () => {
		const wrapper = mount(
			<Provider store={store}>
				<ThemeProvider theme={defaultTheme}>
					<Terms />
				</ThemeProvider>
			</Provider>,
		);
		expect(wrapper.find('h1').text()).toEqual('Terms of use');
	});
});
