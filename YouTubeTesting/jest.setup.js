// jest.setup.js
jest.mock('./src/assets/logo.png', () => 'mock-logo.png');
jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn(),
}));
