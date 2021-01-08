import React from 'react';

import {
	VStack,
	HStack,
	StackDivider,
	Text,
	Button,
	Icon,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Square,
	Flex,
} from '@chakra-ui/react';

import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';

export const LoginForm: React.FC = () => {
	return (
		<HStack spacing={4} align="start" divider={<StackDivider />}>
			<VStack>
				<FormControl id="email">
					<FormLabel>Email address</FormLabel>
					<Input type="email" />
				</FormControl>
				<FormControl id="password">
					<FormLabel>Password</FormLabel>
					<Input type="password" />
				</FormControl>
				<Checkbox defaultIsChecked>Keep connected</Checkbox>
			</VStack>
			<Flex flexDir="column" justifyContent="center" w="50%">
				<Text textAlign="left"> Social connect </Text>
				<Button justifyContent="start" my={2}>
					<Square bg="white" borderRadius="8px" p="1px">
						<Icon as={FcGoogle} />
					</Square>
					<Text ml={1}> Google </Text>
				</Button>
				<Button justifyContent="start">
					<Square bg="white" borderRadius="8px">
						<Icon as={ImFacebook2} color="blue.400" />
					</Square>
					<Text ml={1}> Facebook </Text>
				</Button>
			</Flex>
		</HStack>
	);
};
