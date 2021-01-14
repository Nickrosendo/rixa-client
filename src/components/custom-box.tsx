import React from 'react';
import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

export interface CustomBoxProps extends BoxProps {
	lightBg?: string;
	darkBg?: string;
	lightColor?: string;
	darkColor?: string;
	inverted?: boolean;
}

export const CustomBox: React.FC<CustomBoxProps> = (props: any) => {
	const {
		lightBg = 'brand.200',
		darkBg = 'white',
		lightColor = 'white',
		darkColor = 'brand.200',
		inverted = false,
	} = props;

	const bg = useColorModeValue(
		inverted ? darkBg : lightBg,
		inverted ? lightBg : darkBg,
	);
	const color = useColorModeValue(
		inverted ? darkColor : lightColor,
		inverted ? lightColor : darkColor,
	);

	return (
		<Box bg={bg} color={color} {...props}>
			{props.children}
		</Box>
	);
};
