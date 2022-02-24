import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/users';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const userInfo = getUser();
  const [currentUser, setCurrentUser] = useState(
    userInfo ? { id: userInfo.id, email: userInfo.email } : {}
  );
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
