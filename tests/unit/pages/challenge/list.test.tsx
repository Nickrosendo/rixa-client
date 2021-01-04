import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';

import ChallengeList from '@root/pages/challenge/list';
import { ALL_CHALLENGES_QUERY } from '@root/graphql/queries';

const mocks = [
	{
		request: {
			query: ALL_CHALLENGES_QUERY,
		},
		result: {
			data: {
				queryChallenge: [
					{
						id: Math.random(),
						title: 'Mocked challenge',
					},
				],
			},
		},
	},
];

describe('Test challenge list page', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(
			<MockedProvider mocks={mocks} addTypename={false}>
				<ChallengeList />
			</MockedProvider>,
		);
		expect(wrapper).toBeDefined();
	});
});
