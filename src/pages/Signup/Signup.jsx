// src/pages/Signup/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after signup
import './Signup.css'; // You'll create this CSS file next

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const backendUrl = "http://127.0.0.1:8000"; // Your Django backend URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/accounts/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Handle specific error messages from Django backend (e.g., username already taken)
        let errorMessage = 'Signup failed.';
        if (errorData.username) {
          errorMessage = `Username: ${errorData.username.join(', ')}`;
        } else if (errorData.email) {
          errorMessage = `Email: ${errorData.email.join(', ')}`;
        } else if (errorData.password) {
          errorMessage = `Password: ${errorData.password.join(', ')}`;
        } else if (errorData.detail) {
          errorMessage = errorData.detail;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('Signup successful:', data);
      alert('Signup successful! Please log in.'); // Or a more styled notification
      navigate('/login'); // Redirect to login page after successful signup
    } catch (err) {
      setError(err.message);
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <p className="login-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login here</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;