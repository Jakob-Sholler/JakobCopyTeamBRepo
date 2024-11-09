import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',  // Transpile TypeScript and JavaScript with Babel
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',  // Ensure ts-jest uses the correct TypeScript config
    },
  },
  transformIgnorePatterns: [
    '/node_modules/(?!firebase)',  // Optional, for packages needing transformation
  ],
  verbose: true,  // Set Jest to be more verbose in the output
};

export default config;
