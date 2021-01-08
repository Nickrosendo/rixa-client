import React from 'react';
import {
	VStack,
	HStack,
	StackDivider,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Text,
	Button,
	Icon,
	Square,
	Flex,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';

export const SignupForm: React.FC = () => {
	return (
		<VStack spacing={4} align="start" divider={<StackDivider />}>
			<Flex
				flexDir="column"
				justifyContent="center"
				w="100%"
				alignItems="start"
			>
				<Text textAlign="left" mb={2}>
					{' '}
					Register with social network{' '}
				</Text>
				<Flex alignItems="center">
					<Button justifyContent="start" mx={2}>
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
			</Flex>

			<VStack align="start">
				<Text textAlign="left" mb={2}>
					{' '}
					Register with email and password{' '}
				</Text>
				<FormControl id="email">
					<FormLabel>Email address</FormLabel>
					<Input type="email" />
				</FormControl>

				<FormControl id="nickname">
					<FormLabel>Nickname</FormLabel>
					<Input type="text" />
					<FormHelperText>
						That will be how other players find you.
					</FormHelperText>
				</FormControl>

				<HStack divider={<StackDivider />} spacing={4}>
					<FormControl id="password">
						<FormLabel>Password</FormLabel>
						<Input type="password" />
					</FormControl>
					<FormControl id="confirm_password">
						<FormLabel>Confirm password</FormLabel>
						<Input type="password" />
					</FormControl>
				</HStack>
			</VStack>
		</VStack>
	);
};
