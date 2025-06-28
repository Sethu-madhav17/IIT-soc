import React from "react";
import { Link } from "react-router-dom";
import "./Publication.css";

const imageLinks = [
  {
    src: "/Media/pod.png",
    alt: "Newsletter",
    to: "/Newsletter",
    linkText: "Newsletter",
  },
  {
    src: "/Media/pod.png",
    alt: "Yearbook",
    to: "/Yearbook",
    linkText: "Yearbook",
  },
  {
    src: "Media/pod.png",
    alt: "Magazine",
    to: "/Magazine",
    linkText: "Magazine",
  },
   {
    src: "Media/pod.png",
    alt: "webinars",
    to: "/webinars",
    linkText: "webinars",
  },
  {
    src: "Media/pod.png",
    alt: "Alumni Meet",
    to: "/Alumni Meets",
    linkText: "Alumni Meet",
  },
  
];

const Publication = () => (
  <div className="publication-two-column">
    {/* Left: Plain centered text */}
    <div className="publication-plain-text">
      <h2>Welcome to Our Publications</h2>
      <p>
Indian Institute Of Technology Indore      </p>
    </div>

    {/* Right: Images grid with text field and link */}
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

