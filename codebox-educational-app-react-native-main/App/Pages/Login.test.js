// Login.test.js
import { render } from '@testing-library/react-native';
import React from 'react';
import { AuthContext } from './AuthContextMock'; // Import the AuthContextMock
import Login from './Login';

test('Renders the Login component', () => {
  const { getByTestId } = render(
    // Use the AuthContextMock as the provider for AuthContext
    <AuthContext.Provider value={{ userData: null, setUserData: () => {} }}>
      <Login />
    </AuthContext.Provider>
  );
  // Test case: Renders the Login component
test("Renders the Login component", () => {
    const { getByTestId } = render(<Login />);
  });
  
});
