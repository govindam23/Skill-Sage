// AuthContextMock.js
import React from 'react';

export const AuthContext = React.createContext({
  userData: null,
  setUserData: () => {},
});
