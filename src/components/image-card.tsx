import React from 'react';
import { Box, Image, Heading, ResponsiveValue } from '@chakra-ui/react';

import { CustomBox } from '@root/components';

export interface ImageCardProps {
	imageSrc: string;
	title: string;
	width?: string | ResponsiveValue<any>;
	height?: string | ResponsiveValue<any>;
}

export const ImageCard: React.FC<ImageCardProps> = ({
	imageSrc = '',
	title = '',
	width = { base: '100%', md: '40%' },
	height = '400px',
}) => {
	return (
		<Box w={width} position="relative" h={height} m="1">
			<Image
				w="100%"
				h="100%"
				top="0"
				borderRadius="8px"
				src={imageSrc}
				position="absolute"
			/>
			<CustomBox
				position="absolute"
				bottom="0"
				zIndex="2"
				h="20%"
				w="100%"
				p="2"
				borderRadius="8px"
				display="flex"
				alignItems="center"
			>
				<Heading>{title}</Heading>
			</CustomBox>
		</Box>
	);
};
