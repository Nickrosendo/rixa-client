import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';

import { User } from '@root/helpers/interfaces';

export interface RankListItemProps {
	id: string;
	user: User;
	rankPosition: number;
}

export const RankListItem: React.FC<RankListItemProps> = ({
	user = {},
	rankPosition = 0,
}) => {
	return (
		<Flex alignItems="center" w="100%" my="2">
			<Text minW="20px"> {rankPosition} </Text>
			<Image
				src={user.avatarUrl}
				w="45px"
				h="45px"
				mx="3"
				borderRadius="100%"
			/>
			<Box
				bg="brand.200"
				border="1px solid #fff"
				p="2"
				borderRadius="8px"
				w="100%"
			>
				<Text> {user.nickname} </Text>{' '}
			</Box>
		</Flex>
	);
};
