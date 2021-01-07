import React from 'react';
import { Box, BoxProps, useColorModeValue, useTheme } from '@chakra-ui/react';

export interface CustomBoxProps extends BoxProps {
	lightBg?: string;
	darkBg?: string;
	lightColor?: string;
	darkColor?: string;
}

export const CustomBox: React.FC<CustomBoxProps> = (props: any) => {
	const {
		lightBg = 'brand.200',
		darkBg = 'white',
		lightColor = 'white',
		darkColor = 'brand.200',
	} = props;
	const bg = useColorModeValue(lightBg, darkBg);
	const color = useColorModeValue(lightColor, darkColor);

	return (
		<Box bg={bg} color={color} {...props}>
			{props.children}
		</Box>
	);
};
