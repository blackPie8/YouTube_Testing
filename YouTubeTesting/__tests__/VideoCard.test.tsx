import React from 'react';
import { render } from '@testing-library/react-native';
import VideoCard from '../src/components/VideoCard';

describe('VideoCard Component', () => {
  const mockVideo = {
    thumbnail: { uri: 'mock-thumbnail-url' },
    profile: { uri: 'mock-profile-url' },
    title: 'Video Title',
    subtitle: 'Video Subtitle',
    metadata: '1.2M views • 2 hours ago',
  };

  it('should render the video card container', () => {
    const { getByTestId } = render(<VideoCard video={mockVideo} />);
    const videoCardContainer = getByTestId('video-card-container');
    expect(videoCardContainer).toBeTruthy();
  });

  it('should render the thumbnail image', () => {
    const { getByTestId } = render(<VideoCard video={mockVideo} />);
    const thumbnailImage = getByTestId('thumbnail-image');
    expect(thumbnailImage).toBeTruthy();
    expect(thumbnailImage.props.source.uri).toBe(mockVideo.thumbnail.uri);
  });

  it('should render the profile image', () => {
    const { getByTestId } = render(<VideoCard video={mockVideo} />);
    const profileImage = getByTestId('profile-image');
    expect(profileImage).toBeTruthy();
    expect(profileImage.props.source.uri).toBe(mockVideo.profile.uri);
  });

  it('should render the title text', () => {
    const { getByTestId } = render(<VideoCard video={mockVideo} />);
    const titleText = getByTestId('video-title');
    expect(titleText).toBeTruthy();
    expect(titleText.props.children).toBe(mockVideo.title);
  });

  it('should render the subtitle text', () => {
    const { getByTestId } = render(<VideoCard video={mockVideo} />);
    const subtitleText = getByTestId('video-subtitle');
    expect(subtitleText).toBeTruthy();
    expect(subtitleText.props.children).toBe(mockVideo.subtitle);
  });

  it('should render the metadata text', () => {
    const { getByTestId } = render(<VideoCard video={mockVideo} />);
    const metadataText = getByTestId('video-metadata');
    expect(metadataText).toBeTruthy();
    expect(metadataText.props.children).toBe(mockVideo.metadata);
  });

  it('should render the video card with correct structure', () => {
    const { getByTestId } = render(<VideoCard video={mockVideo} />);
    const videoCardContainer = getByTestId('video-card-container');
    const childElements = videoCardContainer.children;
    expect(childElements.length).toBe(2);
  });
});
