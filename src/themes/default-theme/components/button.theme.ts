export const Button = {
	baseStyle: ({ colorMode }) => ({
		fontWeight: 'bold',
		textTransform: 'uppercase',
		borderRadius: '8px',
	}),
	variants: {
		brand: ({ colorMode }) => ({
			bg: colorMode === 'dark' ? 'white' : 'brand.200',
			color: colorMode === 'dark' ? 'brand.200' : 'white',
			borderColor: colorMode === 'dark' ? 'brand.200' : 'white',
			borderWidth: '1px',
			_hover: {
				bg: colorMode === 'dark' ? 'brand.200' : 'white',
				color: colorMode === 'dark' ? 'white' : 'brand.200',
				borderColor: colorMode === 'dark' ? 'white' : 'brand.200',
			},
		}),
	},
	defaultProps: {
		size: 'sm',
		variant: 'brand',
	},
};
