import React from 'react';

import {
	ChakraProvider,
	cookieStorageManager,
	localStorageManager,
} from '@chakra-ui/react';

import { defaultTheme } from '@root/themes';

export const ThemeContainer: any = ({ children = <></>, cookies = '' }) => {
	return (
		<ChakraProvider
			theme={defaultTheme}
			colorModeManager={
				typeof cookies === 'string'
					? cookieStorageManager(cookies)
					: localStorageManager
			}
		>
			{children}
		</ChakraProvider>
	);
};
