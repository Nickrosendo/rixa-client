export const Drawer = {
	parts: [
		'overlay',
		'dialogContainer',
		'dialog',
		'header',
		'closeButton',
		'body',
		'footer',
	],
	baseStyle: ({ colorMode }) => ({
		body: {
			bg: colorMode === 'dark' ? 'brand.200' : 'white',
			color: colorMode === 'dark' ? 'white' : 'brand.200',
			paddingTop: '3rem',
		},
	}),
	defaultProps: {
		size: 'xs',
	},
};
