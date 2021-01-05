export const RixaEmblem = {
	baseStyle: ({ colorMode }) => ({
		_hover: {
			bg: colorMode === 'dark' ? 'gray.100' : 'brand.200',
			transition: 'background-color 1s',
			boxShadow: 'dark-lg',
			cursor: 'pointer',
		},
	}),
};
