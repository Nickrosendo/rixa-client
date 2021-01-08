import React from 'react';

import {
	VStack,
	HStack,
	StackDivider,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
} from '@chakra-ui/react';

export const SignupForm: React.FC = () => {
	return (
		<VStack>
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
	);
};
