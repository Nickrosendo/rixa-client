import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import {
	RixaEmblem,
	HeaderMenuLeftGroup,
	HeaderMenuRightGroup,
} from '@root/components';

interface HeaderMenuProps {
	auth?: boolean;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = () => {
	return (
		<>
			<Box w="100%" h="60px" p={2} mb="3rem">
				<Flex align="center" justifyContent="space-between">
					<HeaderMenuLeftGroup />
					<HeaderMenuRightGroup />
				</Flex>
			</Box>
			<RixaEmblem />
		</>
	);
};
