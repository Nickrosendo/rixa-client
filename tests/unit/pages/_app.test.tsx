import React from 'react';
import { shallow } from 'enzyme';
import { getPage } from 'next-page-tester';

import App from '@root/pages/_app';
import Home from '@root/pages/home';

describe('Test App root', () => {
	it('renders children Home component', async () => {
		const { page } = await getPage({
			route: '/home',
		});

		const wrapper = shallow(
			<App
				Component={Home}
				pageProps={page.props}
				router={page.props.options.router}
			/>,
		);
		expect(wrapper).toBeDefined();
	});
});
