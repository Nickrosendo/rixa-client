import React from 'react';
import { mount } from 'enzyme';

import { defaultInitialState } from '../../../src/store';

import Layout from '../../../src/components/layout';

describe('Test Layout component', () => {
	it('renders children text', () => {
		const wrapper = mount(
			<Layout initialReduxState={defaultInitialState}>Hello World</Layout>,
		);
		expect(wrapper.text()).toEqual('Hello World');
	});
});
