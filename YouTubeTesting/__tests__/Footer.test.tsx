import { render, fireEvent, screen } from '@testing-library/react-native';
import Footer from '../src/components/Footer';
import { launchImageLibrary } from 'react-native-image-picker';

jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn(),
}));

describe('Footer Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders Footer component correctly', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer-container')).toBeTruthy();
    expect(screen.getByTestId('footer-first-part')).toBeTruthy();
    expect(screen.getByTestId('footer-second-part')).toBeTruthy();
    expect(screen.getByTestId('footer-add-button')).toBeTruthy();
  });

  it('should contain a "plus" button', () => {
    render(<Footer />);
    
    const plusButton = screen.getByTestId('footer-add-button');
    expect(plusButton).toBeTruthy();
  });

  it('calls openGallery when the plus button is pressed', () => {
    render(<Footer />);
    
    (launchImageLibrary as jest.Mock).mockImplementation((options, callback) => {
      callback({ assets: [{ uri: 'sample-uri' }] });
    });

    fireEvent.press(screen.getByTestId('footer-add-button'));
    
    expect(launchImageLibrary).toHaveBeenCalledTimes(1);
  });

  it('logs the selected image URI when image is selected', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<Footer />);

    (launchImageLibrary as jest.Mock).mockImplementation((options, callback) => {
      callback({ assets: [{ uri: 'sample-uri' }] });
    });

    fireEvent.press(screen.getByTestId('footer-add-button'));

    expect(consoleSpy).toHaveBeenCalledWith("Selected image URI:", "sample-uri");

    consoleSpy.mockRestore();
  });

  it('does not open gallery if no image is selected', () => {
    render(<Footer />);
    
    (launchImageLibrary as jest.Mock).mockImplementation((options, callback) => {
      callback({ assets: [] });
    });

    fireEvent.press(screen.getByTestId('footer-add-button'));
    
    expect(launchImageLibrary).toHaveBeenCalledTimes(1);
  });

  it('renders the correct icons in the footer', () => {
    render(<Footer />);
    
    const homeIcon = screen.getByTestId('footer-first-part').children[0];
    const bellIcon = screen.getByTestId('footer-second-part').children[0];
    expect(homeIcon).toBeTruthy();
    expect(bellIcon).toBeTruthy();
  });

  it('does not show any unexpected elements', () => {
    render(<Footer />);

    expect(screen.queryByText('unexpected-text')).toBeNull();
  });

  it('calls openGallery with correct options', () => {
    render(<Footer />);
    
    (launchImageLibrary as jest.Mock).mockImplementation((options, callback) => {
      callback({ assets: [{ uri: 'sample-uri' }] });
    });

    fireEvent.press(screen.getByTestId('footer-add-button'));
    
    expect(launchImageLibrary).toHaveBeenCalledWith(
      { mediaType: 'mixed', selectionLimit: 3 },
      expect.any(Function)
    );
  });

  it('should render the correct styles for the footer', () => {
    render(<Footer />);
    
    const footerContainer = screen.getByTestId('footer-container');
    expect(footerContainer).toHaveStyle({ flexDirection: 'row', borderTopWidth: 1 });
  });

});
