import React from 'react';
import { Button, Icon, Tooltip } from '@chakra-ui/react';

import { CgDarkMode } from 'react-icons/cg';

export const ToggleColorMode: React.FC = () => {
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
		<Tooltip hasArrow label="Toggle DarkMode" bg="gray.300" color="black">
			<Button onClick={toggleColorMode}>
				<Icon as={CgDarkMode} />
			</Button>
		</Tooltip>
	);
};
