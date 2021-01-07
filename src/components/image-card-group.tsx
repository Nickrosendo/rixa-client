import React from 'react';
import { Flex } from '@chakra-ui/react';

import { ImageCard, ImageCardProps } from '@root/components';

interface ImageCardGroupProps {
	cards: Array<ImageCardProps>;
	height?: string;
	width?: string;
}

export const ImageCardGroup: React.FC<ImageCardGroupProps> = ({
	cards = [],
	height = '200px',
	width = '100%',
}) => {
	return (
		<Flex
			flexDir={{ base: 'column', md: 'row' }}
			align="center"
			justifyContent="center"
			w={width}
			my="3"
			minH={height}
		>
			{cards &&
				cards.map((card: ImageCardProps) => (
					<React.Fragment key={card.imageSrc}>
						<ImageCard imageSrc={card.imageSrc} title={card.title} />
					</React.Fragment>
				))}
		</Flex>
	);
};
