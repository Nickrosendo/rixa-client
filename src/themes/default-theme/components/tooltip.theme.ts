export const Tooltip = {
	baseStyles: {
		borderRadius: '8px',
	},
	variants: {
		brand: ({ colorMode }) => ({
			bg: colorMode === 'dark' ? 'white' : 'brand.200',
			color: colorMode === 'dark' ? 'brand.200' : 'white',
		}),
	},
	defaultProps: {
		size: 'sm',
		variant: 'brand',
	},
};
