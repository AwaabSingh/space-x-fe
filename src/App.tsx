import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Page/LoginPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
