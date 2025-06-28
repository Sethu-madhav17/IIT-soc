import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="signup-name">Name</label>
          <input type="text" id="signup-name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="signup-email">Email</label>
          <input type="email" id="signup-email" placeholder="you@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="signup-phone">Phone</label>
          <input type="tel" id="signup-phone" placeholder="Your Phone Number" required />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input type="password" id="signup-password" placeholder="Create Password" required />
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
