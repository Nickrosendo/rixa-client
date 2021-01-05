import React from 'react';
import {
	Flex,
	Box,
	Menu,
	MenuList,
	MenuItem,
	MenuButton,
	Button,
	ButtonGroup,
	Divider,
	Icon,
} from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

import { RixaEmblem, ToggleColorMode } from '@root/components';

interface HeaderMenuProps {
	drawer?: boolean;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ drawer = false }) => {
	return (
		<>
			<Box w="100%" h="60px" p={2} mb="3rem">
				<Flex align="center" justifyContent="space-between">
					<Menu>
						<Flex align="center">
							<MenuButton as={Button} size="md">
								<Icon as={MdMenu} w="26px" h="26px" />
							</MenuButton>
							<ToggleColorMode />
						</Flex>

						<MenuList>
							<MenuItem>Download</MenuItem>
							<MenuItem>Create a Copy</MenuItem>
							<MenuItem>Mark as Draft</MenuItem>
							<MenuItem>Delete</MenuItem>
							<MenuItem>Attend a Workshop</MenuItem>
						</MenuList>
					</Menu>

					<ButtonGroup isAttached>
						<Button mr="-px">Signup</Button>
						<Divider orientation="vertical" w="1" />
						<Button mr="-px">Login</Button>
					</ButtonGroup>
				</Flex>
			</Box>
			<RixaEmblem />
		</>
	);
};
