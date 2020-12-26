import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string;

		backgrounds: {
			main: string;
			primary: string;
			secondary: string;
		};

		colors: {
			light: string;
			dark: string;
		};
	}
}
