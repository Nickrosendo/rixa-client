import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';

import ChallengeHistory from '@root/pages/challenge/history';
import { GET_CHALLENGES_BY_CREATOR_ID } from '@root/graphql/queries';

const mocks = [
	{
		request: {
			query: GET_CHALLENGES_BY_CREATOR_ID,
		},
		result: {
			data: {
				getChallengesByCreatorId: [
					{
						id: Math.random(),
						title: 'Mocked challenge',
					},
				],
			},
		},
	},
];

describe('Test challenge history page', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(
			<MockedProvider mocks={mocks} addTypename={false}>
				<ChallengeHistory />
			</MockedProvider>,
		);
		expect(wrapper).toBeDefined();
	});
});
