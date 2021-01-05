import React from 'react';
import Link from 'next/link';
import {
	Button,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	Heading,
	Avatar,
	useDisclosure,
} from '@chakra-ui/react';

interface DrawerNavigationItem {
	label: string;
	location: string;
}

export const ProfileDrawerNavigationMenu: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const avatarRef = React.useRef();
	const drawerNavigationItems: Array<DrawerNavigationItem> = [
		{
			label: 'Find a challenge',
			location: '/challenge/list',
		},
		{
			label: 'History of Challenges',
			location: '/challenge/history',
		},
		{
			label: 'Balance history',
			location: '/balance',
		},
	];

	return (
		<>
			<Button variant="unstyled" ref={avatarRef} onClick={onOpen}>
				<Avatar src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon4404.jpg?image=q_auto:best&v=1518361200" />
			</Button>

			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={avatarRef}
			>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />

						<DrawerBody>
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
