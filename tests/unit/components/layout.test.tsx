import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../../../src/components/layout';

describe('Test Layout component', () => {
	it('renders children text', () => {
		const wrapper = shallow(<Layout>Hello World</Layout>);
		expect(wrapper.text()).toEqual('Hello World');
	});
});
