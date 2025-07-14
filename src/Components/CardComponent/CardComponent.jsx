import React from "react";
import "./CardComponent.css";

// SVG icons for Instagram, LinkedIn, Twitter
const InstagramIcon = () => (
  <svg className="card-component__icon-social" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17" cy="7" r="1.5" fill="#E4405F" stroke="none" />
  </svg>
);


const LinkedInIcon = () => (
  <svg className="card-component__icon-social" width="24" height="24" viewBox="0 0 24 24" fill="#0077b5">
    <path d="M22.23 0H1.77C.792 0 0 .775 0 1.729v20.542C0 23.225.792 24 1.77 24h20.46C23.206 24 24 23.225 24 22.271V1.729C24 .775 23.206 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.325 7.633c-1.13 0-2.049-.917-2.049-2.048 0-1.13.919-2.048 2.049-2.048 1.13 0 2.049.918 2.049 2.048 0 1.131-.919 2.048-2.049 2.048zM20.452 20.452h-3.53v-5.605c0-1.336-.026-3.054-1.862-3.054-1.862 0-2.147 1.453-2.147 2.953v5.706h-3.53V9h3.392v1.561h.048c.472-.893 1.626-1.832 3.348-1.832 3.584 0 4.246 2.358 4.246 5.428v6.295z"/>
  </svg>
);

// const TwitterIcon = () => (
//   <svg
//     className="card-component__icon-social"
//     width="24"
//     height="24"
//     viewBox="0 0 120 120"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect width="120" height="120" rx="24" fill="#000" />
//     <path
//       d="M85.5 34.5H74.6L60 54.1L45.4 34.5H34.5L54.3 60L34.5 85.5H45.4L60 65.9L74.6 85.5H85.5L65.7 60L85.5 34.5Z"
//       fill="#fff"
//     />
//   </svg>

// );

const CardComponent = ({
  imageSrc,
  imageAlt,
  title,
  description,
  instagramUrl,
  linkedinUrl,
  // twitterUrl,
}) => (
  <div className="card-component">
    
    <div>
        <h3 className="card-component__title">{title}</h3>
    <p className="card-component__desc">{description}</p>
    <div className="card-component__socials">
      {instagramUrl && (
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>
      )}
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      )}
      {/* {twitterUrl && (
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <TwitterIcon />
        </a>
      )} */}
      </div>
    
    </div>
    <img
      src={imageSrc}
      alt={imageAlt}
      className="card-component__icon"
    />
  </div>
);

export default CardComponent;


