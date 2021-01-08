import React, { MouseEvent } from 'react';
import { ButtonGroup, Button, Divider } from '@chakra-ui/react';

import { AuthModal } from '@root/components';

export const AuthButtonGroup: React.FC = () => {
	const [authType, setAuthType] = React.useState('signup');
	const [isOpenAuthModal, setIsOpenAuthModal] = React.useState(false);
	const handleCloseAuthModal = () => {
		setIsOpenAuthModal(false);
	};

	const handleChangeAuthType = (event: MouseEvent<HTMLButtonElement>) => {
		const { currentTarget } = event;
		setAuthType(currentTarget?.value);
		setIsOpenAuthModal(true);
	};

	return (
		<ButtonGroup isAttached>
			<Button mr="-px" onClick={handleChangeAuthType} value="signup">
				Signup
			</Button>
			<Divider orientation="vertical" w="1" />
			<Button mr="-px" onClick={handleChangeAuthType} value="login">
				Login
			</Button>

			{isOpenAuthModal && (
				<AuthModal
					isOpen={isOpenAuthModal}
					onClose={handleCloseAuthModal}
					initialAuthType={authType}
				/>
			)}
		</ButtonGroup>
	);
};
