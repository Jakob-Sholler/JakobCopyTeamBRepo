module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
    globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Ensure ts-jest uses the correct TypeScript config
    },
  },
  transformIgnorePatterns: [
    '/node_modules/(?!firebase)', // Optional, for packages needing transformation
  ],
};
