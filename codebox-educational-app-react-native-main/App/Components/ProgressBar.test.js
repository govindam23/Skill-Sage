// ProgressBar.test.js
import { render } from '@testing-library/react-native';
import React from 'react';
import ProgressBar from './ProgressBar';

describe('ProgressBar Component Tests', () => {
  it('Renders the ProgressBar with the correct progress value', () => {
    // Render the ProgressBar component with a specific progress value
    const { getByTestId } = render(<ProgressBar progress={0.5} />);

    // Find the ProgressBar component using the testID
    const progressBar = getByTestId('progress-bar');

    // Your assertion test for the ProgressBar with the correct progress value goes here
    // For example:
    expect(progressBar).toBeDefined();
  });
});
