const TEST_REGEX = '((\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	globals: {
		'ts-jest': {
			babelConfig: true,
		},
	},
	testRegex: TEST_REGEX,
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	collectCoverage: true,
	collectCoverageFrom: ['**/src/**', '!**/node_modules/**', '!**/vendor/**'],
	moduleNameMapper: {
		'\\.(scss|sass|css)$': 'identity-obj-proxy',
	},
};