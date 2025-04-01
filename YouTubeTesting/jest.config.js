module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: 'coverage',
};