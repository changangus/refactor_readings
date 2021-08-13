module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/inventory/*.js',
  ],
  moduleFileExtensions: ['js'],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
};
