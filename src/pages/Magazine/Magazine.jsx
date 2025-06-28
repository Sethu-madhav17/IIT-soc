import React from "react";
import { Link } from "react-router-dom";
import "./Magazine.css";

const imageLinks = [
  {
    src: "/Media/magazine1.png",
    alt: "magazine 2015-16",
    to: "https://online.fliphtml5.com/mijvo/fkee/",
    linkText: "Magazine 2015-16",
  },
  {
    src: "/Media/am23.png",
    alt: "Magazine 2023",
    to: "https://online.fliphtml5.com/mijvo/fkee/",
    linkText: "Magazine 2023",
  },
  {
    src: "/Media/am19.png",
    alt: "Magazine 2019",
    to: "https://online.fliphtml5.com/mijvo/fkee/",
    linkText: "Magazine 2019",
  },
  {
    src: "/Media/am24.png",
    alt: "Magazine 2024",
    to: "https://online.fliphtml5.com/mijvo/fkee/",
    linkText: "Magazine 2024",
  },
];

const Magazine = () => (
  <div className="magazine-container">
    {/* Top row: Plain centered text with background */}
    <div className="magazine-plain-text">
      <div className="magazine-plain-text-content">
        <h2>Alumni Magazine</h2>
        <p>Indian Institute Of Technology Indore</p>
      </div>
    </div>

    {/* Bottom row: Images grid */}
    <div className="magazine-images-grid">
      {imageLinks.map((img, idx) => (
        <div className="magazine-image-block" key={idx}>
          <a
            href={img.to}
            className="magazine-image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img.src} alt={img.alt} className="magazine-image" />
          </a>
          <div className="magazine-link-wrapper">
            <a
              href={img.to}
              className="magazine-under-link"
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

export default Magazine;
