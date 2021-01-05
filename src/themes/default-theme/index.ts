import { extendTheme } from '@chakra-ui/react';

// Global Theming configs
import { config } from '@root/themes/default-theme/config.theme';

// Global style overrides
import { styles } from '@root/themes/default-theme/styles.theme';

// Global colors overrides
import { colors } from '@root/themes/default-theme/colors.theme';

// Components overrides
import {
	Button,
	RixaEmblem,
	Heading,
} from '@root/themes/default-theme/components';

export const defaultTheme = extendTheme({
	config,
	colors,
	styles,
	components: {
		Button,
		RixaEmblem,
		Heading,
	},
});
