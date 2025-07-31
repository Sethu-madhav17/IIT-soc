// src/Team.jsx

import React, { useEffect, useState } from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import "./Team.css";

// IMPORTANT: Remove all hardcoded image imports and the static teamMembers array
// import member1 from "/Media/ansh.png";
// import member2 from "/Media/dadhich.jpg";
// ... (etc.) ...
// const teamMembers = [...]; // This entire array should be removed

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const backendUrl = "http://127.0.0.1:8000"; // Your Django backend URL
        
        // Retrieve the authentication token from localStorage
        // IMPORTANT: Replace 'authToken' with the actual key you use to store the token
        const authToken = localStorage.getItem('authToken'); 

        if (!authToken) {
            setError("Authentication token not found. Please log in.");
            setLoading(false);
            return; // Stop execution if no token
        }

        const response = await fetch(`${backendUrl}/api/team/members/`, { // Correct API endpoint
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}` // Include the authentication token
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || `Failed to fetch team members (Status: ${response.status})`);
        }

        const data = await response.json();
        setTeamMembers(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching team members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []); // Empty dependency array means this runs once on component mount

  if (loading) {
    return (
      <div className="cardbox">
        <h1 style={{ textAlign: "center", marginBottom: "32px", fontWeight: "bold", width: "fit-content", padding: "10px", zIndex: 10 }}>Team Alumni Cell</h1>
        <p>Loading team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cardbox">
        <h1 style={{ textAlign: "center", marginBottom: "32px", fontWeight: "bold", width: "fit-content", padding: "10px", zIndex: 10 }}>Team Alumni Cell</h1>
        <p style={{ color: "red" }}>Error: {error}</p>
        <p>Please ensure you are logged in and have an active authentication token.</p>
      </div>
    );
  }

  // Ensure teamMembers is an array before mapping
  if (!Array.isArray(teamMembers) || teamMembers.length === 0) {
    return (
      <div className="cardbox">
        <h1 style={{ textAlign: "center", marginBottom: "32px", fontWeight: "bold", width: "fit-content", padding: "10px", zIndex: 10 }}>Team Alumni Cell</h1>
        <p>No team members found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="cardbox">
        {/* Bubbles are global decorative elements, usually not inside card div */}
        <img className='bubble31' src='/Media/bubble.png' alt="Decorative bubble" />
        <img className='bubble21' src='/Media/bubble.png' alt="Decorative bubble" />
        
        <h1 style={{ textAlign: "center", marginBottom: "32px" , fontWeight:"bold" ,width:"fit-content",padding:"10px", zIndex: 10 }}>Team Alumni Cell</h1>
        
        <div className="cards">
          {/* Removed the redundant bubble21 image here */}
          <div className="card" >
            {teamMembers.map((member) => (
              <CardComponent
                key={member.id} // Use member.id from API for unique key
                imageSrc={member.imageSrc || '/Media/default_profile.png'} // Use imageSrc from API, with fallback
                imageAlt={member.imageAlt}
                title={member.title}
                description={member.description}
                instagramUrl={member.instagram_url} // Backend uses snake_case, ensure your CardComponent accepts this or map it
                linkedinUrl={member.linkedin_url}   // Backend uses snake_case, ensure your CardComponent accepts this or map it
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;