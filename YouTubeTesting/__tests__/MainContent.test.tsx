import { render } from '@testing-library/react-native';
import MainContent from '../src/components/MainContent';
import { videos } from '../src/components/VideoData';

jest.mock('../src/assets/ad.png', () => 'mock-ad.png');

describe('MainContent Component', () => {
  it('should render the correct number of video cards', () => {
    const { getAllByTestId } = render(<MainContent />);
    const videoCards = getAllByTestId('video-card-container');
    expect(videoCards.length).toBe(videos.length);
  });

  it('should render the ad for the first video', () => {
    const { getByTestId } = render(<MainContent />);
    const adContainer = getByTestId('ad-container');
    expect(adContainer).toBeTruthy();
  });

  it('should not render the ad for other videos', () => {
    const { queryAllByTestId } = render(<MainContent />);
    const adContainers = queryAllByTestId('ad-container');
    expect(adContainers.length).toBe(1);
  });

  it('should render the correct ad image and button text', () => {
    const { getByTestId } = render(<MainContent />);
    const adImage = getByTestId('ad-image');
    const adButtonText = getByTestId('ad-button-text');

    expect(adImage.props.source).toBe('mock-ad.png');
    expect(adButtonText.props.children).toBe('One-month trial');
  });
});
