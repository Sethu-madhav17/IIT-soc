import React from 'react'
import './Home.css'
import Typewriter from '../../Components/Typewriter/Typewriter'
import Sphereglow from '../../Components/Sphereglow/Sphereglow'
import Introtext from '../../Components/Introtext'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <>
    <div className="banner" >
      <Sphereglow />
        </div>
        <Introtext />
        <div class="polygon-wrapper">
    <div class="polygon-shadow"></div>
    <div class="polygon-main">
      
      
      
      
    </div>
  </div>
  <div className="mvbanner">
     <p id='mvtext'> mission vission</p>
  <div className="mvcontainer">
      <div class="vision">
      <span class="alpha" >Vision</span>
      <span>To promote a goodwill and a sense of pride with aim to reach on the highest rank among the top engineering and technology institutes worldwide by fostering strong relationships with its alumni, corporations, and philanthropists.</span>
     </div>
     <div class="vision">
      <span class="alpha">Mission</span>
      <span>The mission of the Alumni and Corporate Relations office is to cultivate a vibrant and inclusive community of Alumni & Corporates, committed to deepening connections with each other.</span>
    </div>
    </div>
    </div>
 
       <div className="login">
    <div className="login_images">
      <img src="/Media/aahan.jpg" alt="image1" className="login_image"/>
      <img src="/Media/aadish.jpg" alt="image2" className="login_image"/>
      <img src="/Media/adar pandita.jpg" alt="image4" className="login_image"/>
      <img src="/Media/vishal.jpg" alt="image5" className="login_image"/>
    </div>
<button class="signup-btn">
    <span class="label">Sign Up</span>
    <span class="accent"></span>
    <span class="arrow"></span>
  </button>   </div>
  <div className="message_bar">
     <div className="message dean">
       <img alt="Dean ACR IIT indore" src="/Media/profsuman.jpg" id="img_message"/>
        <div id="name">suman</div>
        <div id="desg">dean ACR</div>
        <p id="m_title">Dean ACR</p>
         <p id="m_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus at odit voluptas deserunt sequi inventore omnis. Corrupti, accusamus! Libero quod magni ullam perspiciatis quae voluptate commodi animi aperiam fugiat eveniet assumenda sapiente accusamus numquam repudiandae, cumque itaque quas blanditiis a deserunt sequi sunt. Possimus sapiente doloremque modi ex earum.</p> 
    </div>
      <div className="message director">
        <img alt="Director IIT indore" src="/Media/suhas_s_joshi.png" id="img_message"/>
        <div id="name">suhas</div>
        <div id="desg">director</div>
        <p id="m_title">Director</p>
         <p id="m_content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, modi odit eveniet adipisci expedita veniam pariatur soluta voluptate. Voluptatum fugiat optio, voluptate amet cumque id incidunt perspiciatis dolore, iste nemo obcaecati omnis fugit velit dolor similique possimus sequi distinctio nostrum numquam mollitia vero, vitae porro! Nesciunt suscipit laborum exercitationem necessitatibus.</p>      
     </div>
   </div>
   
    </>
  )
}

export default Home
