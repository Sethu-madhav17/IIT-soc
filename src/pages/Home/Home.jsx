import React from 'react'
import './Home.css'
import Typewriter from '../../Components/Typewriter/Typewriter'
import Sphereglow from '../../Components/Sphereglow/Sphereglow'
import Introtext from '../../Components/Introtext'
import Footer from '../../Components/Footer/Footer'
import SignupUpButton from '../../Components/SignupUpButton/SignupUpButton'

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
     <p id='mvtext'> Mission Vision</p>
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
<SignupUpButton/>  </div>
  <div className="message_bar">
  <div className="message dean">
    <div className="left">
      <img alt="Dean ACR IIT indore" src="/Media/profsuman.jpg" id="img_message"/>
      <div id="name">Prof. Suman Mukhopadhyay</div>
      <div id="desg">Dean ACR</div>
    </div>
    <div className="right">
      <p id="m_title">Dean ACR</p>
      <p id="m_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius similique inventore ducimus adipisci rem! Exercitationem architecto eligendi, labore porro adipisci ducimus veritatis in quod ex, dolorem sint suscipit laborum iure voluptate laudantium. Ipsam minus nam explicabo magni voluptates accusamus, eos tenetur commodi praesentium adipisci. Harum fugit incidunt odit praesentium?</p>
    </div>
  </div>
  <div className="message director">
    <div className="left">
      <img alt="Director IIT indore" src="/Media/suhas_s_joshi.png" id="img_message"/>
      <div id="name">Prof. Suhas S. Joshi</div>
      <div id="desg">Director</div>
    </div>
    <div className="right">
      <p id="m_title">Director</p>
      <p id="m_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi vitae corporis temporibus! Magnam laboriosam sapiente voluptatum dolores, neque molestiae eligendi aliquid harum aspernatur maxime doloribus distinctio nulla ut unde voluptatibus vel qui adipisci optio facilis temporibus! Optio ipsum, quaerat aliquam ad saepe repudiandae, voluptatem assumenda non sit, deserunt laudantium.</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Home
