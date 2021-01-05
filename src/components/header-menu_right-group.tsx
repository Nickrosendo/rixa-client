import React from 'react';
import { ButtonGroup, Button, Divider } from '@chakra-ui/react';

import { ProfileDrawerNavigationMenu } from '@root/components';

interface HeaderMenuRightGroupProps {
	size?: string;
	auth?: boolean;
}

export const HeaderMenuRightGroup: React.FC<HeaderMenuRightGroupProps> = ({
	size = 'sm',
	auth = true,
}) => {
	return auth ? (
		<ProfileDrawerNavigationMenu />
	) : (
		<ButtonGroup isAttached size={size}>
			<Button mr="-px">Signup</Button>
			<Divider orientation="vertical" w="1" />
			<Button mr="-px">Login</Button>
		</ButtonGroup>
	);
};
