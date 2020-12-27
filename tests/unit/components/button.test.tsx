import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../src/components/button';
import { defaultTheme } from '../../../src/themes/default-theme';

describe('Button Component', () => {
	it('renders button component', () => {
		const wrapper = shallow(<Button theme={defaultTheme}>Hello World</Button>);
		expect(wrapper.find('button').text()).toEqual('Hello World');
	});
});