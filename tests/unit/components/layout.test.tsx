import React from 'react';
import { mount } from 'enzyme';

import { Layout } from '@root/components';

describe('Test Layout component', () => {
	it('renders children text', () => {
		const wrapper = mount(<Layout>Hello World</Layout>);
		expect(wrapper.text()).toEqual('Hello World');
	});
});
