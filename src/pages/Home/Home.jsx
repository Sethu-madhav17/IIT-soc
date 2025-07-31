// src/Home.jsx

import React, { useEffect, useState } from 'react';
import './Home.css';
import Typewriter from '../../Components/Typewriter/Typewriter';
import Introtext from '../../Components/Introtext/Introtext';
import Footer from '../../Components/Footer/Footer'; // Assuming Footer will be added/used later
import SignupUpButton from '../../Components/SignupUpButton/SignupUpButton';

function Home() {
  const [homeData, setHomeData] = useState({
    mission_vision: null,
    official_messages: [],
    featured_alumni: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const backendUrl = "http://127.0.0.1:8000"; // Your Django backend URL
        const response = await fetch(`${backendUrl}/api/home/`); // Endpoint for home page content

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || `Failed to fetch home page data (Status: ${response.status})`);
        }

        const data = await response.json();
        setHomeData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching home page data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomePageData();
  }, []); // Empty dependency array means this runs once on component mount

  if (loading) {
    return (
      <div className="home-loading">
        <p style={{ textAlign: 'center', padding: '50px' }}>Loading homepage content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-error">
        <p style={{ textAlign: 'center', padding: '50px', color: 'red' }}>Error: {error}</p>
        <p style={{ textAlign: 'center' }}>Please ensure the backend server is running and data is populated in Django admin.</p>
      </div>
    );
  }

  const { mission_vision, official_messages, featured_alumni } = homeData;

  return (
    <>
      <div className="banner">
        <div className="content-wrapper">
          <div className="textbox">
            <h2 className="text ">Welcome To</h2>
            <Typewriter />
          </div>
          <img
            src="/Media/iitiabhi1.jpg"
            alt="iitiabhinandan"
            className="iitabhi1 "
          />
        </div>
      </div>

      <Introtext />

      <div className="polygon-wrapper">
        <div className="polygon-shadow"></div>
        <div className="polygon-main"></div>
      </div>

      <div className="mvbanner">
        <img className='bubble' src='/Media/bubble.png' alt="Decorative bubble" />
        <img className='bubble1' src='/Media/bubble.png' alt="Decorative bubble" />
        <p id='mvtext'> Mission Vision</p>
        <div className="mvcontainer">
          <div className="vision">
            <span className="alpha">Vision</span>
            <span>{mission_vision?.vision_text || "Loading vision..."}</span>
          </div>
          <div className="vision">
            <span className="alpha">Mission</span>
            <span>{mission_vision?.mission_text || "Loading mission..."}</span>
          </div>
        </div>
      </div>

      <div className="login">
        <img className='bubble' src='/Media/bubble.png' alt="Decorative bubble" />
        <img className='bubble1' src='/Media/bubble.png' alt="Decorative bubble" />
        <div className="login_images">
          {featured_alumni.map((alumni) => (
            // Use API provided URL, fallback to default
            <img
              key={alumni.id}
              src={alumni.profile_picture || '/Media/default_profile.png'}
              alt={`${alumni.first_name} ${alumni.last_name}`}
              className="login_image"
            />
          ))}
        </div>
        <SignupUpButton />
      </div>

      <div className="message_bar">
        {official_messages.map((message) => (
          <div className="message" key={message.id}>
            <div className="left">
              {/* Use API provided URL, fallback */}
              <img
                alt={`${message.name} ${message.role}`}
                src={message.profile_picture || '/Media/default_official.png'}
                id="img_message"
              />
              <div id="name">{message.name}</div>
              <div id="desg">{message.role}</div>
            </div>
            <div className="right">
              <p id="m_title">{message.message_title || message.role}</p>
              <p id="m_content">{message.message_content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Home;
