import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';

export interface ImageCardProps {
	imageSrc: string;
	title: string;
	width?: string;
	height?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
	imageSrc = '',
	title = '',
	width = '40%',
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
			<Box
				border="1px solid #fff"
				position="absolute"
				bottom="0"
				zIndex="2"
				h="20%"
				w="100%"
				bg="brand.200"
				p="2"
				borderRadius="8px"
				display="flex"
				alignItems="center"
			>
				<Heading color="white">{title}</Heading>
			</Box>
		</Box>
	);
};
