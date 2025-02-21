import type { Config } from 'jest';

const config: Config = {
  coverageDirectory: '../coverage/',
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  rootDir: './src/',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules'],
  verbose: true,
};

export default config;
