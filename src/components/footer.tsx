import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

import { RixaEmblem, Copyright } from '@root/components';

export const Footer: React.FC = () => {
	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			flexDir="column"
			bg="white"
			color="brand.200"
			w="100%"
			borderRadius="8px"
			p="4"
			borderBottomRadius="0"
			mt="10"
		>
			<RixaEmblem position="relative" />
			<Flex justifyContent="space-between" mt="4" w="100%">
				<Flex>
					<Flex flexDir="column" mr="4">
						<Heading> Help material </Heading>
						<Text> FAQ </Text>
						<Text> Blog </Text>
					</Flex>
					<Flex flexDir="column">
						<Heading> About </Heading>
						<Text> Contact </Text>
						<Text> Advertising </Text>
						<Text> Feedback </Text>
					</Flex>
				</Flex>
				<Flex>
					<Flex flexDir="column" mr="4">
						<Heading> Legal </Heading>
						<Text> Privacy Terms </Text>
						<Text> Terms of Use </Text>
					</Flex>
					<Flex flexDir="column">
						<Heading> Social </Heading>
						<Text> Facebook </Text>
						<Text> Discord </Text>
						<Text> Twitter </Text>
						<Text> Instagram </Text>
					</Flex>
				</Flex>
			</Flex>
			<Copyright />
		</Flex>
	);
};
