import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LayoutPage from './LayoutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LayoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
