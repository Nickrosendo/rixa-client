import React from 'react';
import { VStack } from '@chakra-ui/react';

import { Challenge } from '@root/helpers/interfaces';
import { ChallengeListItem } from '@root/components';

export interface ChallengeListProps {
	challenges: Challenge[];
	width?: string;
}

export const ChallengeList: React.FC<ChallengeListProps> = ({
	challenges = [],
	width = '100%',
}) => {
	return (
		<VStack w={width}>
			{challenges.map((challenge: any) => {
				return <ChallengeListItem item={challenge} key={challenge.id} />;
			})}
		</VStack>
	);
};
