import React, { useState } from "react";
import "./Achivements.css";

const achievements = [
  {
    src: "/Media/PRANAV.png",
    title: "Shri.Pranav Nair",
    description: "Mr. Pranav Nair working as Scientific Officer at BARC and a proud alumnus of IIT Indore, with groundbreaking contributions in the field of nuclear research, he’s a trailblazer shaping India’s scientific future.",
  },
  {
    src: "/Media/ias.jpg",
    title: "Shri. Dilkhush Meena",
    description: "Currently, I am Working as Indian Administrative Service (IAS).",
  },
  {
    src: "/Media/irs.jpg",
    title: "Shri. Shashank Gupta",
    description: "Currently, I am Working as IRS (Indian Revenue Service - Income Tax). ",
  },
  {
    src: "/Media/cto.jpg",
    title: "Shri. Penupothu Venkata Sai Vamsi",
    description: "I'm currently holding the position of CTO in the B2B SaaS company 'Runo'.",
  },
  {
    src: "/Media/app.jpg",
    title: "Shri. Ashok Pancily Poothiyot",
    description: "I am a transformative technology executive currently serving as the Senior Director at Dropbox. I partner closely with Dropbox CEO (Drew Houston) to lead our Generative AI and Universal Search investments impacting over 700 million users.",
  },
  {
    src: "/Media/anjali.jpg",
    title: "Dr.Anjali Chaudhary",
    description: "Currently, I am Working as an Assistant Professor in the Department of Physics at IIT Bhilai. More details please click here: https://www.iitbhilai.ac.in/index.php?pid=achaudhary",
  },
   {
    src: "/Media/vs.jpg",
    title: "Dr. Vinay Sharma",
    description: "Currently, I am Working as an Assistant Professor at BSBE, IIT Jammu. Also serving as an Associate Dean,  Alumni and Corporate Relations at IIT Jammu. I previously completed tenure as Associate Dean of International Relations at IIT Jammu.More details please click here: https://www.iitjammu.ac.in/faculty/~vinaysharma",
  },
   {
    src: "/Media/bp.jpg",
    title: "Brahm Pratap",
    description: "General Manager in the R&D (Maruti Suzuki Ind pvt ltd.)",
  },
   {
    src: "/Media/maa.jpg",
    title: " Mr. Anmol Arora",
    description: "We’re proud to highlight the success of our alumnus, Mr. Anmol Arora, currently serving as the CEO of DocVita. Under his leadership, DocVita has secured funding of $1 million from the esteemed global investors, including Y Combinator, Flat6Labs, Goodwater Capital, and notable angel investors.",
  },
   {
    src: "/Media/dooze.jpg",
    title: "Proudly Made in India",
    description: "IIT Indore alumnus Gaurav Parchani (BTech ME 2013) co-founded Dozee, India’s first contactless remote patient monitoring device for cardiac, hypertension, and respiratory care. Recently, Dozee raised Rs. 71 crore in funding led by Gokul Rajaram, with participation from major investors. Recognized in Forbes India 30 under 30, Mr. Parchani’s innovative work, especially during the pandemic, is a source of pride for IIT Indore and an inspiration for its students.",
  },
  
];

const Achivements = () => {
  const [flipped, setFlipped] = useState(Array(achievements.length).fill(false));

  const handleFlip = (idx) => {
    setFlipped((prev) =>
      prev.map((f, i) => (i === idx ? !f : f))
    );
  };

  return (
    <div className="achievements-container">
      <div className="achievement-banner">
  ⚠️ Tap a card to know more
</div>

      <div className="achievements-header">
        <h1>Alumni Achievements</h1>
        <p>Indian Institute Of Technology Indore</p>
      </div>
      <div className="achievements-grid">
        {achievements.map((item, idx) => (
          <div
            className={`achievement-card${flipped[idx] ? " flipped" : ""}`}
            key={idx}
            onClick={() => handleFlip(idx)}
            tabIndex={0}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleFlip(idx)}
            role="button"
            aria-pressed={flipped[idx]}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={item.src} alt={item.title} className="achievement-image" />
                <div className="achievement-title">{item.title}</div>
              </div>
              <div className="card-back">
                <div className="achievement-description">{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achivements;

