import { extendTheme } from '@chakra-ui/react';

export const defaultTheme = extendTheme({
	config: {
		useSystemColorMode: false,
		initialColorMode: 'dark',
	},
	colors: {
		brand: {
			50: '#BEDEB8',
			100: '#7D9179',
			200: '#3C463A',
			400: '#395E32',
			800: '#58914D',
		},
	},
});
