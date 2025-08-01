// src/Team.jsx

import React, { useEffect, useState } from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import "./Team.css";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const backendUrl = "http://127.0.0.1:8000";
        
        const response = await fetch(`${backendUrl}/api/team/members/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // No Authorization header needed for this public endpoint anymore
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || `Failed to fetch team members (Status: ${response.status})`);
        }

        const data = await response.json();
        setTeamMembers(data.results); // <--- THE CRITICAL FIX: Use data.results
      } catch (err) {
        setError(err.message);
        console.error("Error fetching team members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

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
      </div>
    );
  }

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
        <img className='bubble31' src='/Media/bubble.png' alt="Decorative bubble" />
        <img className='bubble21' src='/Media/bubble.png' alt="Decorative bubble" />
        
        <h1 style={{ textAlign: "center", marginBottom: "32px" , fontWeight:"bold" ,width:"fit-content",padding:"10px", zIndex: 10 }}>Team Alumni Cell</h1>
        
        <div className="cards">
          <div className="card" >
            {teamMembers.map((member) => (
              <CardComponent
                key={member.id}
                imageSrc={member.imageSrc || '/Media/default_profile.png'}
                imageAlt={member.imageAlt}
                title={member.title}
                description={member.description}
                instagramUrl={member.instagram_url}
                linkedinUrl={member.linkedin_url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;