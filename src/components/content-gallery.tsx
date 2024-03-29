import React from 'react';
import { Heading, Box, Text, Image, Flex } from '@chakra-ui/react';

import { useScrollBox } from '@root/hooks';

interface GalleryItem {
	id: string;
	href?: string;
	imageSrc?: string;
	imageAlt?: string;
	description?: string;
}

interface ContentGalleryProps {
	title?: string;
	items: Array<GalleryItem>;
}

export const ContentGallery: React.FC<ContentGalleryProps> = ({
	title = '',
	items = [],
}) => {
	const scrollRef: React.Ref<HTMLDivElement> = React.useRef();
	const { isDragging } = useScrollBox(scrollRef);

	return (
		<Flex
			align="left"
			direction="column"
			minW="100%"
			height="280px"
			position="relative"
			my="4"
		>
			{title && <Heading mb=".5rem"> {title} </Heading>}
			<Box
				whiteSpace="nowrap"
				overflowX="scroll"
				overflowY="hidden"
				position="absolute"
				w="100%"
				h="250px"
				top="1.5rem"
				boxShadow="dark-lg"
				pointerEvents={isDragging ? 'none' : undefined}
				css={{
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				}}
				ref={scrollRef}
			>
				{items &&
					items.map &&
					items.map((item: GalleryItem) => {
						return (
							<Box
								key={item.id}
								h="100%"
								w="30%"
								minW="200px"
								borderWidth="1px"
								borderRadius="lg"
								overflow="hidden"
								display="inline-block"
								mr=".25rem"
							>
								{item.imageSrc && (
									<Image
										userSelect="none"
										pointerEvents="none"
										draggable="false"
										src={item.imageSrc}
										alt={item.imageAlt}
										w="100%"
										h="100%"
									/>
								)}
								{item.description && (
									<Box p="6">
										<Text> {item.description} </Text>{' '}
									</Box>
								)}
							</Box>
						);
					})}
			</Box>
		</Flex>
	);
};
