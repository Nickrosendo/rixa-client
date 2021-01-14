import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';

import ChallengeRoom from '@root/pages/challenge/[id]';
import { GET_CHALLENGE_BY_ID } from '@root/graphql/queries';

const mocks = [
	{
		request: {
			query: GET_CHALLENGE_BY_ID,
		},
		result: {
			data: {
				getChallengeById: [
					{
						id: Math.random(),
						title: 'Mocked challenge',
						totalPrize: 500,
						creator: {
							nickname: 'test',
						},
					},
				],
			},
		},
	},
];

describe('Test Challenge Room page', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(
			<MockedProvider mocks={mocks} addTypename={false}>
				<ChallengeRoom />
			</MockedProvider>,
		);
		expect(wrapper).toBeDefined();
	});
});
