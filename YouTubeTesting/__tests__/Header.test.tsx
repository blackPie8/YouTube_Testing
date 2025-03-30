import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../src/components/Header';

jest.mock('../src/assets/logo.png', () => 'mock-logo.png');

describe('Header Component', () => {
  
  // Test case 1
  it('should render the header container', () => {
    const { getByTestId } = render(<Header />);
    const headerContainer = getByTestId('header-container');
    expect(headerContainer).toBeTruthy();
  });

  // Test case 2
  it('should render the logo image', () => {
    const { getByTestId } = render(<Header />);
    const logo = getByTestId('logo');
    expect(logo).toBeTruthy();
  });

  // Test case 3
  it('should have the correct source for the logo image', () => {
    const { getByTestId } = render(<Header />);
    const logo = getByTestId('logo');
    expect(logo.props.source).toEqual('mock-logo.png');
  });

  // Test case 4
  it('should render the explore scroll view', () => {
    const { getByTestId } = render(<Header />);
    const exploreScrollView = getByTestId('explore-scroll-view');
    expect(exploreScrollView).toBeTruthy();
  });


  // Test case 5
  it('should render the "Music" category in the explore section', () => {
    const { getByText } = render(<Header />);
    const musicText = getByText('Music');
    expect(musicText).toBeTruthy();
  });

  // Test case 6
  it('should render the "Podcasts" category in the explore section', () => {
    const { getByText } = render(<Header />);
    const podcastsText = getByText('Podcasts');
    expect(podcastsText).toBeTruthy();
  });

  // Test case 7
  it('should render the "Reverberation" category in the explore section', () => {
    const { getByText } = render(<Header />);
    const reverberationText = getByText('Reverberation');
    expect(reverberationText).toBeTruthy();
  });

  // Test case 8
  it('should render the "The Weekend" category in the explore section', () => {
    const { getByText } = render(<Header />);
    const weekendText = getByText('The Weekend');
    expect(weekendText).toBeTruthy();
  });

  // Test case 9
  it('should render the "Gaming" category in the explore section', () => {
    const { getByText } = render(<Header />);
    const gamingText = getByText('Gaming');
    expect(gamingText).toBeTruthy();
  });

  // Test case 10
  it('should render the "Real Madrid CF" category in the explore section', () => {
    const { getByText } = render(<Header />);
    const realMadridText = getByText('Real Madrid CF');
    expect(realMadridText).toBeTruthy();
  });

  // Test case 11
  it('should render the correct number of categories in the explore section', () => {
    const { getAllByText } = render(<Header />);
    const categories = getAllByText(/.*/);
    const exploreCategories = categories.filter(text => text.props.style.color === 'black');
    expect(exploreCategories.length).toBe(6);
  });

});