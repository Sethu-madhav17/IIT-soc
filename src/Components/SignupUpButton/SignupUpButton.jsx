import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignupUpButton.css";

const SignupUpButton = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Signup"); // Redirects to /signup page
  };

  return (
    <button className="signupup-btn" onClick={handleClick}>
      <span className="label">SignUp</span>
      {children}
      <span className="accent"></span>
      <span className="arrow"></span>
    </button>
  );
};

export default SignupUpButton;
