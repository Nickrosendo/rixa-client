import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Balance from '@root/pages/balance';
import { defaultTheme } from '@root/themes/default-theme';

describe('Test Balance page', () => {
	it('renders children text', () => {
		const wrapper = mount(
			<ThemeProvider theme={defaultTheme}>
				<Balance />
			</ThemeProvider>,
		);
		expect(wrapper.find('h1').text()).toEqual('Balance');
	});
});
