import React from "react";
import { Link } from "react-router-dom";
import "./Newsletter.css";

const imageLinks = [
  {
    src: "/Media/pod.png",
    alt: "Newsletter Vol-1 Issue-1",
    to: "https://online.fliphtml5.com/mijvo/fkee/",
    linkText: "Newsletter Vol-1 Issue-1",
  },
  {
    src: "/Media/pod.png",
    alt: "Newsletter Vol-1 Issue-2",
    to: "https://online.fliphtml5.com/mijvo/fkee/",
    linkText: "Newsletter Vol-1 Issue-2",
  },
  
];

const Newsletter = () => (
  <div className="newsletter-container">
    
    <div className="newsletter-plain-text">
      <div className="newsletter-plain-text-content">
        <h2>Newsletter</h2>
        <p>Indian Institute Of Technology Indore</p>
      </div>
    </div>

    
    <div className="newsletter-images-grid">
      {imageLinks.map((img, idx) => (
        <div className="newsletter-image-block" key={idx}>
          <a
            href={img.to}
            className="newsletter-image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img.src} alt={img.alt} className="newsletter-image" />
          </a>
          <div className="newsletter-link-wrapper">
            <a
              href={img.to}
              className="newsletter-under-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {img.linkText}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Newsletter;