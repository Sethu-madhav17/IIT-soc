import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Team from './pages/Team/Team';
import Signup from './pages/Signup/Signup';
import Magazine from './pages/Magazine/Magazine';
import Newsletter from './pages/Newsletter/Newsletter';
import Achivements from './pages/Achivements/Achivements';
import Events from './pages/Events/Events'
import Magnumopus from './pages/Magnumopus/Magnumopus';


function App() {

  return (
     <><Navbar />
       
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/alumni" element={<div>Alumni Page</div>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/Achivements" element={<Achivements />} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Magnumopus" element={<Magnumopus/>} />
        <Route path="/events/webinars" element={<div>Webinars Page</div>} />
      </Routes>
      <Footer/>
      </>
      
     
    
  )
}

export default App
