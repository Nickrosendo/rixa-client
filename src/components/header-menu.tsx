import React from 'react';
import {
	Flex,
	Box,
	Menu,
	MenuButton,
	Button,
	ButtonGroup,
	Divider,
	Icon,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	useDisclosure,
} from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

import { RixaEmblem, ToggleColorMode } from '@root/components';

interface HeaderMenuProps {
	auth?: boolean;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const menuRef = React.useRef();

	return (
		<>
			<Box w="100%" h="60px" p={2} mb="3rem">
				<Flex align="center" justifyContent="space-between">
					<Menu>
						<Flex align="center">
							<MenuButton as={Button} size="sm" ref={menuRef} onClick={onOpen}>
								<Icon as={MdMenu} w="26px" h="26px" />
							</MenuButton>
							<ToggleColorMode />
						</Flex>

						<Drawer
							isOpen={isOpen}
							placement="left"
							onClose={onClose}
							finalFocusRef={menuRef}
						>
							<DrawerOverlay>
								<DrawerContent>
									<DrawerCloseButton />
									<DrawerHeader>Create your account</DrawerHeader>

									<DrawerBody>hello world</DrawerBody>
								</DrawerContent>
							</DrawerOverlay>
						</Drawer>
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
