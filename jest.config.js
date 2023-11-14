module.exports = {
  transform: {
    '\\.(t|j)s$': ['babel-jest', { configFile: './babel.config.testing.js' }]
  },
  testEnvironment: 'jest-environment-node',
};
