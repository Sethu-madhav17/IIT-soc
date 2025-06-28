import React from 'react';
import './App.css'
import Login from './pages/login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Team from './pages/Team/Team';
import Publication from './pages/Publication/Publication';

function App() {

  return (
     <><Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/alumni" element={<div>Alumni Page</div>} />
        {/* <Route path="/students" element={<div>Students Page</div>} /> */}
        <Route path="/team" element={<Team/>} />
        <Route path="/publications" element={<Publication/>} />
        <Route path="/events/workshops" element={<div>Workshops Page</div>} />
        <Route path="/events/webinars" element={<div>Webinars Page</div>} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer/>
      </>
      
     
    
  )
}

export default App
