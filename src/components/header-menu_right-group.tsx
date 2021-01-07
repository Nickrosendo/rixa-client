import React from 'react';
import { ButtonGroup, Button, Divider } from '@chakra-ui/react';

import { ProfileDrawerNavigationMenu, AuthModal } from '@root/components';

interface HeaderMenuRightGroupProps {
	size?: string;
	auth?: boolean;
}

export const HeaderMenuRightGroup: React.FC<HeaderMenuRightGroupProps> = ({
	size = 'sm',
	auth = false,
}) => {
	const [isOpenAuthModal, setIsOpenAuthModal] = React.useState(false);
	const handleCloseAuthModal = () => {
		setIsOpenAuthModal(false);
	};
	const handleOpenAuthModal = () => {
		setIsOpenAuthModal(true);
	};

	return auth ? (
		<ProfileDrawerNavigationMenu />
	) : (
		<ButtonGroup isAttached size={size}>
			<Button mr="-px" onClick={handleOpenAuthModal}>
				Signup
			</Button>
			<Divider orientation="vertical" w="1" />
			<Button mr="-px" onClick={handleOpenAuthModal}>
				Login
			</Button>

			<AuthModal isOpen={isOpenAuthModal} onClose={handleCloseAuthModal} />
		</ButtonGroup>
	);
};
