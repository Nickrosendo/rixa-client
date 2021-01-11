import React from 'react';
import { Container } from '@chakra-ui/react';

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
		<Container maxW="6xl" centerContent>
			{showHeader && <HeaderMenu />}
			{children}
			{showFooter && <Footer />}
		</Container>
	);
};
