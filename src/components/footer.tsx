import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

import { CustomBox, RixaEmblem, Copyright } from '@root/components';

export const Footer: React.FC = () => {
	return (
		<CustomBox
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDir="column"
			w="100%"
			borderRadius="8px"
			p="4"
			borderBottomRadius="0"
			mt="10"
		>
			<RixaEmblem position="relative" />
			<Flex justifyContent="space-between" mt="4" w="100%">
				<Flex flexDir={{ base: 'column', md: 'row' }}>
					<Flex flexDir="column" mr="4">
						<Heading> Help material </Heading>
						<Text> FAQ </Text>
						<Text> Blog </Text>
					</Flex>
					<Flex flexDir="column" mt={{ base: '2', md: '0' }}>
						<Heading> About </Heading>
						<Text> Contact </Text>
						<Text> Advertising </Text>
						<Text> Feedback </Text>
					</Flex>
				</Flex>
				<Flex flexDir={{ base: 'column', md: 'row' }}>
					<Flex flexDir="column" mr="4">
						<Heading> Legal </Heading>
						<Text> Privacy Terms </Text>
						<Text> Terms of Use </Text>
					</Flex>
					<Flex flexDir="column" mt={{ base: '2', md: '0' }}>
						<Heading> Social </Heading>
						<Text> Facebook </Text>
						<Text> Discord </Text>
						<Text> Twitter </Text>
						<Text> Instagram </Text>
					</Flex>
				</Flex>
			</Flex>
			<Copyright />
		</CustomBox>
	);
};
