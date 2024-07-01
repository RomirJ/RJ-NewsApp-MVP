// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState('Guest'); // Initial name is set to 'Guest'

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
