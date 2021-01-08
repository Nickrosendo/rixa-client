import React from 'react';

import {
	VStack,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
} from '@chakra-ui/react';

export const LoginForm: React.FC = () => {
	return (
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
	);
};
