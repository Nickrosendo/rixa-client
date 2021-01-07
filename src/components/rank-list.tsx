import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';

import { RankListItem, RankListItemProps } from '@root/components';

export interface RankListProps {
	list: Array<RankListItemProps>;
	title?: string;
}

export const RankList: React.FC<RankListProps> = ({
	list = [],
	title = '',
}) => {
	return (
		<Flex direction="column" alignItems="center" w="100%">
			{title && (
				<Box my="4">
					<Heading> {title} </Heading>
				</Box>
			)}

			{list &&
				list.length > 0 &&
				list.map((item: RankListItemProps) => (
					<RankListItem
						key={item.id}
						id={item.id}
						user={item.user}
						rankPosition={item.rankPosition}
					/>
				))}
		</Flex>
	);
};
