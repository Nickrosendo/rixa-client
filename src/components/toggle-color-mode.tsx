import React from 'react';
import { Button, Icon, Tooltip } from '@chakra-ui/react';

import { CgDarkMode } from 'react-icons/cg';

interface ToggleColorModeProps {
	size?: string;
}

export const ToggleColorMode: React.FC<ToggleColorModeProps> = ({
	size = 'md',
}) => {
	const toggleColorMode = () => {
		const storageKey = 'chakra-ui-color-mode';
		const currentCookie = document?.cookie?.match(
			new RegExp(`(^| )${storageKey}=([^;]+)`),
		);
		const currentMode = (currentCookie && currentCookie[2]) ?? 'dark';
		const toggledValue = currentMode === 'dark' ? 'light' : 'dark';
		document.cookie = `${storageKey}=${toggledValue}; max-age=31536000; path=/`;
		document.location.reload();
	};

	return (
		<Tooltip hasArrow label="Toggle DarkMode">
			<Button onClick={toggleColorMode} size={size}>
				<Icon as={CgDarkMode} />
			</Button>
		</Tooltip>
	);
};
