import React from 'react';

import { ProfileDrawerNavigationMenu, AuthButtonGroup } from '@root/components';

interface HeaderMenuRightGroupProps {
	size?: string;
	auth?: boolean;
}

export const HeaderMenuRightGroup: React.FC<HeaderMenuRightGroupProps> = ({
	auth = false,
}) => {
	return auth ? <ProfileDrawerNavigationMenu /> : <AuthButtonGroup />;
};
