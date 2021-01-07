import React from 'react';
import Link from 'next/link';
import {
	Button,
	Icon,
	Text,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	Heading,
	Avatar,
	useDisclosure,
} from '@chakra-ui/react';

import { ImCoinYen } from 'react-icons/im';

import { CustomBox } from '@root/components';

interface DrawerNavigationItem {
	label: string;
	location?: string;
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
		{
			label: 'Profile',
			location: '/profile',
		},
		{
			label: 'Security',
			location: '/security',
		},
		{
			label: 'Logout',
		},
	];

	return (
		<>
			<Button
				variant="unstyled"
				ref={avatarRef}
				onClick={onOpen}
				display="flex"
				alignItems="center"
				position="relative"
			>
				<CustomBox
					borderRadius="8px"
					position="absolute"
					pr="50px"
					pl="2"
					right="1rem"
					display="flex"
					alignItems="center"
				>
					<Icon as={ImCoinYen} mr="md" />
					<Text fontSize="16px">1500</Text>
				</CustomBox>
				<Avatar
					boxShadow="dark-lg"
					src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon4404.jpg?image=q_auto:best&v=1518361200"
				/>
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
								drawerNavigationItems.map((item: DrawerNavigationItem) =>
									item.location ? (
										<Link href={item.location} key={Math.random().toString()}>
											<Heading cursor="pointer" _hover={{ color: 'gray.900' }}>
												{item.label}
											</Heading>
										</Link>
									) : (
										<Heading
											cursor="pointer"
											_hover={{ color: 'gray.900' }}
											key={Math.random().toString()}
										>
											{item.label}
										</Heading>
									),
								)}
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};
