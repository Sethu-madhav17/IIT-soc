// src/pages/Team.jsx
import React from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import "./Team.css"
// You can use local images (import them) or public URLs
import member1 from "/Media/ansh.png"; // if in src/images
import member2 from "/Media/dadhich.jpg";
import member3 from "/Media/vedansh.jpg";
import member4 from "/Media/anima.jpg";
import member5 from "/Media/yashasvi.jpg";
import member6 from "/Media/raj.jpg";
import member7 from "/Media/garvith.jpg";
import member8 from "/Media/keshvi.jpg";
import member9 from "/Media/ak.jpg";

const teamMembers = [
  {
    imageSrc: member1, // or "/images/member1.jpg" if in public
    imageAlt: "Ansh Kyal",
    title: "Ansh Kyal",
    description: "Head Alumni Cell",
    instagramUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
  {
    imageSrc: member2,
    imageAlt: "Mohak Dadhich",
    title: "Mohak Dadhich",
    description: "Co-Head Alumni Cell",
    instagramUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
   {
    imageSrc: member3,
    imageAlt: "Vedansh Shrivastava",
    title: "Vedansh Shrivastava",
    description: "Aram Head",
    instagramUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
   {
    imageSrc: member4,
    imageAlt: "Anima",
    title: "Anima",
    description: "News letter Planning Coordinator",
    instagramUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
   {
    imageSrc: member5,
    imageAlt: "Yashasvi shukla",
    title: "Yashasvi shukla",
    description: "Webdev Head",
    instagramUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
   {
    imageSrc: member6,
    imageAlt: "Kavyansh Raj",
    title: "Kavyansh Raj",
    description: "Newsletter Coordinator",
    instagramUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
   {
    imageSrc: member7,
    imageAlt: "Garvit Mathur",
    title: "Garvit Mathur",
    description: "Design Head",
    instagramUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
   {
    imageSrc: member8,
    imageAlt: "Keshvi Lakhotia",
    title: "Keshvi Lakhotia",
    description: "logistic Head",
    instagramUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
  }, {
    imageSrc: member9,
    imageAlt: "Anushka Krishnan",
    title: "Anushka Krishnan",
    description: "Content Head",
    instagramUrl: "#",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
  // Add more team members as needed
];

const Team = () => (
  <div className="cardbox">
    <h1 style={{ textAlign: "center", marginBottom: "32px" , fontWeight:"bold" ,backgroundColor:"white" ,width:"fit-content",padding:"10px" }}>Our Team</h1>
     <div className="cards">
        <div className="card" >
    {teamMembers.map((member, idx) => (
      <CardComponent key={idx} {...member} />
    ))}
  </div>
  </div>
  </div>
);

export default Team;
