import React from "react";
import { Link } from "react-router-dom";
import "./Publication.css";
import Magazine from "../Magazine/Magazine";
import Newsletter from "../Newsletter/Newsletter";
const imageLinks = [
  {
    src: "/Media/podbuild.jpg",
    alt: "Newsletter",
    to: "/Newsletter",
    linkText: "Newsletter",
  },
  {
    src: "/Media/pub.jpg",
    alt: "Yearbook",
    to: "/Yearbook",
    linkText: "Yearbook",
  },
  {
    src: "Media/magazine.jpg",
    alt: "Magazine",
    to: "/Magazine",
    linkText: "Alumni Magazine",
  },
   {
    src: "Media/achivement.jpg",
    alt: "Achivements",
    to: "/Achivements",
    linkText: "Alumni Achivements",
  },
   
  
];

const Publication = () => (
  <div className="publication-two-column">
    <img className='bubble2' src='/Media/bubble.png'></img>
    <div className="publication-plain-text">
      <h2>Publications</h2>
      <p>
Indian Institute Of Technology Indore      </p>
    </div>

    <div className="publication-images-grid">
       
      {imageLinks.map((img, idx) => (
        <div className="publication-image-block" key={idx}>
          <Link to={img.to} className="publication-image-link">
            <img src={img.src} alt={img.alt} className="publication-image" />
          </Link>
          
          <div className="publication-link-wrapper">
            <Link to={img.to} className="publication-under-link">
              {img.linkText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Publication;

