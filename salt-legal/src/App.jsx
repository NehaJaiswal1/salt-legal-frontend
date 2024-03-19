

import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';

function App() {
 
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            
          </Routes>
      </div>
      
    </Router>
  );
};

export default App;




