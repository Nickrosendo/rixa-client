import React from 'react';

import { Text } from '@chakra-ui/react';

export const Copyright: React.FC = () => {
	return (
		<Text
			fontSize="12px"
			mt="4"
			textAlign="center"
			px={{ base: '0', md: '10%' }}
		>
			© 2020 - 2021 Rixa. Rixa isn’t endorsed by Riot Games and doesn’t reflect
			the views or opinions of Riot Games or anyone officially involved in
			producing or managing League of Legends. League of Legends and Riot Games
			are trademarks or registered trademarks of Riot Games, Inc. League of
			Legends © Riot Games, Inc.
		</Text>
	);
};
