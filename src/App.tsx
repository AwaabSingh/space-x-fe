import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Page/LoginPage';
import CompanyDetails from './Page/CompanyDetails';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { LoginProvider } from './context/LoginContext';
import { Toaster } from 'react-hot-toast';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL_DOMAIN,
  cache: new InMemoryCache(),
});

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <ApolloProvider client={client}>
      <LoginProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<CompanyDetails />} />
          </Routes>
        </Router>
        <Toaster />
      </LoginProvider>
    </ApolloProvider>
  );
};

export default App;
