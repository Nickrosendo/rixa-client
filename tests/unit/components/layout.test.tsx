import React from 'react';
import { mount } from 'enzyme';

import { defaultInitialState } from '@root/store';

import Layout from '@root/components/layout';

describe('Test Layout component', () => {
	it('renders children text', () => {
		const wrapper = mount(
			<Layout initialReduxState={defaultInitialState}>Hello World</Layout>,
		);
		expect(wrapper.text()).toEqual('Hello World');
	});
});
