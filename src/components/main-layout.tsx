import React from 'react';
import { Container, Box } from '@chakra-ui/react';

import { HeaderMenu, Footer } from '@root/components';

export interface MainLayoutProps {
	showHeader?: boolean;
	showFooter?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	showHeader = true,
	showFooter = true,
	children = {},
}) => {
	return (
		<Container
			minH="100vh"
			maxW="6xl"
			centerContent
			justifyContent="space-between"
		>
			{showHeader && <HeaderMenu />}
			<Box flex="1" w="100%" textAlign="center">
				{children}
			</Box>
			{showFooter && <Footer />}
		</Container>
	);
};
