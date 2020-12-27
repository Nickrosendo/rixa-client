import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Store } from 'redux';
import { ThemeProvider } from 'styled-components';

import Home from '../../../src/pages';
import { defaultInitialState } from '../../../src/store';
import { defaultTheme } from '../../../src/themes/default-theme';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Test Home page', () => {
	let store: Store;
	beforeEach(() => {
		store = mockStore(defaultInitialState);
	});
	it('renders children text', () => {
		const wrapper = mount(
			<Provider store={store}>
				<ThemeProvider theme={defaultTheme}>
					<Home />
				</ThemeProvider>
			</Provider>,
		);
		expect(wrapper.find('h1').text()).toEqual('Hello World');
	});
});
