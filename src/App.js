import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import OtherPage from './pages/OtherPage.js';


const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/main" element={<MainPage/>} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
