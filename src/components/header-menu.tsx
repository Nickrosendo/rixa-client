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

interface HeaderMenuProps {
	drawer?: boolean;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ drawer = false }) => {
	return (
		<Box w="100%" h="60px" p={2}>
			<Flex align="center" justifyContent="space-between">
				<Menu>
					<MenuButton as={Button} size="md" colorScheme="brand" color="#fff">
						<Icon as={MdMenu} w="26px" h="26px" />
					</MenuButton>

					<MenuList colorScheme="brand">
						<MenuItem>Download</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuItem>Mark as Draft</MenuItem>
						<MenuItem>Delete</MenuItem>
						<MenuItem>Attend a Workshop</MenuItem>
					</MenuList>
				</Menu>

				<ButtonGroup size="md" isAttached colorScheme="brand">
					<Button mr="-px" color="#fff">
						Signup
					</Button>
					<Divider orientation="vertical" w="1" />
					<Button mr="-px" color="#fff">
						Login
					</Button>
				</ButtonGroup>
			</Flex>
		</Box>
	);
};
