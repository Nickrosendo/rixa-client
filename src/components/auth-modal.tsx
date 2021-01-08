import React from 'react';
import {
	Flex,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Stack,
	Radio,
	RadioGroup,
} from '@chakra-ui/react';

import { LoginForm, SignupForm } from '@root/components';

export interface AuthModalProps {
	title?: string;
	initialAuthType: string;
	isOpen: boolean;
	onClose?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
	title = 'Sign-up or Login',
	initialAuthType = 'signup',
	isOpen = false,
	onClose = () => null,
}) => {
	const [authType, setAuthType] = React.useState<string>(initialAuthType);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Flex flexDir="column" alignItems="center">
						<RadioGroup
							onChange={setAuthType as () => void}
							value={authType}
							mb="4"
						>
							<Stack direction="row">
								<Radio value="signup">Signup</Radio>
								<Radio value="login">Login</Radio>
							</Stack>
						</RadioGroup>
						{authType === 'signup' ? <SignupForm /> : <LoginForm />}
					</Flex>
				</ModalBody>

				<ModalFooter>
					<Button mr={3} variant="ghost">
						Close
					</Button>
					<Button onClick={onClose}>Confirm</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
