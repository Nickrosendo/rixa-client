export const Modal = {
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
		},
		header: {
			bg: colorMode === 'dark' ? 'brand.200' : 'white',
			color: colorMode === 'dark' ? 'white' : 'brand.200',
			borderTopRadius: '8px',
		},
		footer: {
			bg: colorMode === 'dark' ? 'brand.200' : 'white',
			color: colorMode === 'dark' ? 'white' : 'brand.200',
			borderBottomRadius: '8px',
		},
	}),
};
