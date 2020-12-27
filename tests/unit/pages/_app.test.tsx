import React from 'react';
import { mount } from 'enzyme';
import { getPage } from 'next-page-tester';

import App from '@root/pages/_app';
import Home from '@root/pages/home';

describe('Test App root', () => {
	it('renders children Home component', async () => {
		const { page } = await getPage({
			route: '/home',
		});

		const wrapper = mount(
			<App
				Component={Home}
				pageProps={page.props}
				router={page.props.options.router}
			/>,
		);
		expect(wrapper.find('h1')?.text()).toEqual('Hello World');
	});
});
