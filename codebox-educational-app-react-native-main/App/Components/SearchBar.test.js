// SearchBar.test.js
import { render } from '@testing-library/react-native';
import React from 'react';
import SearchBar from './SearchBar';

// Test case: Renders the SearchBar component
test('Renders the SearchBar component', () => {
  const { getByPlaceholderText } = render(<SearchBar />);

 // Find the TextInput element using the placeholder text 'Search'
  const searchInput = getByPlaceholderText('Search');

 // Assert that the TextInput element is found
  expect(searchInput).toBeTruthy();
});