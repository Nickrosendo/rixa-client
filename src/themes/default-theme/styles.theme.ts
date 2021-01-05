export const styles = {
	global: ({ colorMode }) => ({
		body: {
			fontFamily: "'Lato', sans-serif",
			color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
			bg: colorMode === 'dark' ? 'brand.200' : 'whiteAlpha.900',
			lineHeight: 'base',
		},
	}),
};
