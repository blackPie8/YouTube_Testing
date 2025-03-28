import React from 'react';
import { render } from '@testing-library/react-native';
import Footer from '../src/components/Footer';

describe('Footer Component', () => {
  it('should render the footer container', () => {
    const { getByTestId } = render(<Footer />);
    const footerContainer = getByTestId('footer-container');
    expect(footerContainer).toBeTruthy();
  });

  it('should render the icons part (first and second parts)', () => {
    const { getByTestId } = render(<Footer />);
    const firstPart = getByTestId('footer-first-part');
    const secondPart = getByTestId('footer-second-part');

    expect(firstPart).toBeTruthy();
    expect(secondPart).toBeTruthy();
  });

  it('should render the add button', () => {
    const { getByTestId } = render(<Footer />);
    const addButton = getByTestId('footer-add-button');
    expect(addButton).toBeTruthy();
  });

  it('should have correct structure for the footer with two icon parts and one add button', () => {
    const { getByTestId } = render(<Footer />);
    const footerContainer = getByTestId('footer-container');
    const iconParts = footerContainer.children;
    expect(iconParts.length).toBe(3);
  });
});
