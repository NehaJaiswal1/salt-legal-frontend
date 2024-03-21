

import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Home/Login/Login';
import SignUp from './Component/Home/SignUp/SignUp';
import Templates from './Component/Templates/Templates';
import About from './Component/About/About';
import Package from './Component/Package/Package';
import Features from './Component/Features/Features';
import TemplateSampleDetail from './Component/Templates/TemplateSampleDetail';


function App() {
 
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route exact path="/templates" element={<Templates />} />
            <Route exact path="/about" element={<About/>} />

            <Route exact path="/package" element={<Package/>} />
            <Route exact path="/feature" element={<Features/>} />
            <Route exact path="/templates/template-sample" element={<TemplateSampleDetail/>} />
          </Routes>
      </div>
      
    </Router>
  );
};

export default App;




