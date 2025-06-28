import React from 'react';
import './SphereGlow.css';
import Typewriter from '../Typewriter/Typewriter';

const spheres = [
  { top: '5%', left: '10%', size: '200px' }, //sphere1
  { top: '15%', left: '30%' , size:'60px' }, //sphere2
  { top: '10%', left: '70%' , size:'80px' }, //sphere3
  { top: '40%', left: '5%' , size:'50px' }, //sphere4
  { top: '50%', left: '60%'  , size:'20px'}, //sphere5
  { top: '35%', left: '85%' , size:'200px'}, //sphere6
  { top: '60%', left: '10%' , size:'60px'}, //sphere7
  { top: '65%', left: '45%' , size:'90px'},//sphere8
  { top: '75%', left: '70%' , size:'60px'}, //sphere9
  { top: '20%', right: '4%' , size:'60px'}, //sphere10
  { top: '25%', left: '49%' , size:'30px'}, //sphere11
  { top: '10%', left: '4%' , size:'30px'}, //sphere12
];

const SphereGlow = () => {
  return (
    <div className="banner">
      {/* Glowing Spheres */}
      {spheres.map(({ top, left, right ,size }, i) => (
        <div
          key={i}
          className="sphere"
          style={{
            top,
            left,
            right,
            width: size,
            height: size,
          }}
        />
      ))}

      {/* Overlay Boxes */}
      <div className="content-wrapper">
        
          <div className="textbox">
            <h2 className="text ">Welcome To</h2>
            <Typewriter />
          </div>
          
          <img
           src="/Media/iitiabhi.jpg"
            alt="iitiabhinandan"
            className="iitabhi "
          />
        </div>
      
    </div>
  );
};

export default SphereGlow