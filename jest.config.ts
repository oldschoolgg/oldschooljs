import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
	displayName: 'unit test',
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	coverageProvider: 'v8',
	testRunner: 'jest-circus/runner',
	testMatch: ['<rootDir>/test/**/*.test.ts'],
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/test/tsconfig.json'
		}
	}
});
