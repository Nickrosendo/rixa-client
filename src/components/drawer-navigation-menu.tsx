import React from 'react';
import {
	Button,
	Icon,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Heading,
	useDisclosure,
} from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link';

interface DrawerMenuNavigationProps {
	size?: string;
}

interface DrawerNavigationItem {
	label: string;
	location: string;
}

export const DrawerMenuNavigation: React.FC<DrawerMenuNavigationProps> = ({
	size = 'sm',
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const menuRef = React.useRef();

	const drawerNavigationItems: Array<DrawerNavigationItem> = [
		{
			label: 'Home',
			location: '/home',
		},
		{
			label: 'Terms of Use',
			location: '/terms',
		},
		{
			label: 'Privacy Policy',
			location: '/privacy',
		},
	];

	return (
		<>
			<Button size={size} ref={menuRef} onClick={onOpen}>
				<Icon as={MdMenu} w="26px" h="26px" />
			</Button>

			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={menuRef}
			>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader bg="brand.200">Create your account</DrawerHeader>

						<DrawerBody bg="brand.200">
							{drawerNavigationItems &&
								drawerNavigationItems.map((item: DrawerNavigationItem) => (
									<Link href={item.location} key={item.location}>
										<Heading cursor="pointer" _hover={{ color: 'gray.900' }}>
											{item.label}
										</Heading>
									</Link>
								))}
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};
