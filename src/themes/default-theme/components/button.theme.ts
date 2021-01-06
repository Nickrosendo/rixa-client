export const Button = {
	baseStyle: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		borderRadius: '8px',
	},
	variants: {
		brand: ({ colorMode }) => ({
			bg: colorMode === 'dark' ? 'transparent' : 'brand.200',
			color: colorMode === 'dark' ? 'white' : 'white',
			borderColor: colorMode === 'dark' ? 'white' : 'white',
			borderWidth: '1px',
			_hover: {
				bg: colorMode === 'dark' ? 'white' : 'white',
				color: colorMode === 'dark' ? 'brand.200' : 'brand.200',
				borderColor: colorMode === 'dark' ? 'brand.200' : 'brand.200',
			},
		}),
	},
	defaultProps: {
		size: 'sm',
		variant: 'brand',
	},
};
