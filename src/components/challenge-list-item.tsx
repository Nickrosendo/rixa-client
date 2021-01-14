import React from 'react';
import { Image, Text, Icon, Flex } from '@chakra-ui/react';
import { ImCoinYen } from 'react-icons/im';

import { CustomBox } from '@root/components';
import { Challenge } from '@root/helpers/interfaces';

export interface ChallengeListItemProps {
	item: Challenge;
}

export const ChallengeListItem: React.FC<ChallengeListItemProps> = ({
	item = {},
}) => {
	return (
		<CustomBox
			my="2"
			p="2"
			borderRadius="8px"
			w="100%"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
		>
			<Flex alignItems="center">
				<Image
					src={item.creator.avatarUrl}
					w="45px"
					h="45px"
					mx="3"
					borderRadius="100%"
				/>
				<Text> {item.title} </Text>
			</Flex>
			<Flex alignItems="center">
				<Text> {item.rank} </Text>
				<CustomBox
					p="2"
					borderRadius="8px"
					inverted={true}
					display="flex"
					alignItems="center"
				>
					<Icon as={ImCoinYen} mr="2" />
					<Text fontWeight="bold">{item.totalPrize} </Text>
				</CustomBox>
			</Flex>
		</CustomBox>
	);
};
