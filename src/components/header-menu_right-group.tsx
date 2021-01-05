import React from 'react';
import { ButtonGroup, Button, Divider } from '@chakra-ui/react';

interface HeaderMenuRightGroupProps {
	size?: string;
}

export const HeaderMenuRightGroup: React.FC<HeaderMenuRightGroupProps> = ({
	size = 'sm',
}) => {
	return (
		<ButtonGroup isAttached size={size}>
			<Button mr="-px">Signup</Button>
			<Divider orientation="vertical" w="1" />
			<Button mr="-px">Login</Button>
		</ButtonGroup>
	);
};
