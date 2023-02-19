import React, { createContext, useState } from 'react';

interface Credentials {
  email: string;
  password: string;
  companyName: string;
  ceo: string;
  cto: string;
}

interface LoginContextType {
  credentials: Credentials | null;
  setCredentials: React.Dispatch<React.SetStateAction<Credentials | null>>;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isLoggedIn: boolean;
}

const LoginContext = createContext<LoginContextType>({
  credentials: null,
  setCredentials: () => {},
  login: () => false,
  logout: () => {},
  isLoggedIn: false,
});

interface LoginProviderProps {
  children: React.ReactNode;
}

const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email: string, password: string) => {
    // Check if the email and password are valid
    const isValid = email === 'user@gmail.com' && password === 'passwordUser';

    if (isValid) {
      setCredentials({
        email,
        password,
        companyName: 'SpaceX',
        ceo: 'Elon Musk',
        cto: 'Elon Musk',
      });
      setIsLoggedIn(true);

      // Set a timeout to log the user out after 2 minutes
      setTimeout(() => {
        logout();
      }, 2 * 60 * 1000);
    }

    return isValid;
  };

  const logout = () => {
    setCredentials(null);
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider
      value={{ credentials, setCredentials, login, logout, isLoggedIn }}
    >
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => {
  const context = React.useContext(LoginContext);
  if (context === undefined) {
    throw new Error('useLoginContext must be used within a LoginProvider');
  }
  return context;
};

export { LoginProvider, useLoginContext };
