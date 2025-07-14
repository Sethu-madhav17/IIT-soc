import React from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import "./Team.css"
import member1 from "/Media/ansh.png"; 
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
    imageSrc: member1, 
    imageAlt: "Ansh Kyal",
    title: "Ansh Kyal",
    description: "Head Alumni Cell",
    instagramUrl: "https://www.instagram.com/ansh_kyal29/",
    linkedinUrl: "https://www.linkedin.com/in/anshkyal/",
    
  },
  {
    imageSrc: member2,
    imageAlt: "Mohak Dadhich",
    title: "Mohak Dadhich",
    description: "Co-Head Alumni Cell",
    instagramUrl: "https://www.instagram.com/dadhich.mohak/",
    linkedinUrl: "https://www.linkedin.com/in/dadhichmohak/",
    
  },
   {
    imageSrc: member3,
    imageAlt: "Vedansh Shrivastava",
    title: "Vedansh Shrivastava",
    description: "Aram Head",
    instagramUrl: "https://www.instagram.com/_vedansh.02_/",
    linkedinUrl: "https://www.linkedin.com/in/explorerr/",
    
  },
   {
    imageSrc: member4,
    imageAlt: "Anima",
    title: "Anima",
    description: "News letter Planning Coordinator",
    instagramUrl: "https://www.instagram.com/de_anima_ii/",
    linkedinUrl: "https://www.linkedin.com/in/anima-singh-41133a167/",
    
  },
   {
    imageSrc: member5,
    imageAlt: "Yashasvi shukla",
    title: "Yashasvi shukla",
    description: "Webdev Head",
    instagramUrl: "https://www.instagram.com/_.yashasvi.__/",
    linkedinUrl: "https://www.linkedin.com/in/yashasvi-shukla-49882030a/",
    
  },
   {
    imageSrc: member6,
    imageAlt: "Kavyansh Raj",
    title: "Kavyansh Raj",
    description: "Newsletter Coordinator",
    instagramUrl: "https://www.instagram.com/real_kavyansh/",
    linkedinUrl: "https://www.linkedin.com/in/kavyanshsingh/",
    
  },
   {
    imageSrc: member7,
    imageAlt: "Garvit Mathur",
    title: "Garvit Mathur",
    description: "Design Head",
    instagramUrl: "https://www.instagram.com/garvitmathur05/",
    linkedinUrl: "https://www.linkedin.com/in/garvit-mathur-31552b33b/",
    
  },
   {
    imageSrc: member8,
    imageAlt: "Keshvi Lakhotia",
    title: "Keshvi Lakhotia",
    description: "logistic Head",
    instagramUrl: "https://www.instagram.com/keshvi_lakhotia/",
    linkedinUrl: "https://www.linkedin.com/in/keshvi-lakhotia/",
    
  }, {
    imageSrc: member9,
    imageAlt: "Anushka Krishnan",
    title: "Anushka Krishnan",
    description: "Content Head",
    instagramUrl: "https://www.instagram.com/itsanushkakrishan/",
    linkedinUrl: "https://www.linkedin.com/in/anushka-krishan-65689331a/",
    
  },
];

const Team = () => (
  <div className="cardbox">
    <img className='bubble' src='/Media/bubble.png'></img>
        
    <img className='bubble2' src='/Media/bubble.png'></img>
    <h1 style={{ textAlign: "center", marginBottom: "32px" , fontWeight:"bold" ,backgroundColor:"white" ,width:"fit-content",padding:"10px" }}>Team Alumni Cell</h1>
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
