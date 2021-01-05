import React from 'react';
import { Flex } from '@chakra-ui/react';

import { ToggleColorMode, DrawerMenuNavigation } from '@root/components';

interface HeaderMenuLeftGroupProps {
	size?: string;
}

export const HeaderMenuLeftGroup: React.FC<HeaderMenuLeftGroupProps> = ({
	size = 'sm',
}) => {
	return (
		<Flex align="center">
			<DrawerMenuNavigation size={size} />
			<ToggleColorMode size={size} />
		</Flex>
	);
};
