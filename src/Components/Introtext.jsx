import React from 'react';

const quoteText = `Inverted commas are a kind of punctuation used to put the marks around certain phrases, or words that have specific importance in a sentence. To be precise, if certain phrases are taken from a poem and form a sentence then these punctuations are used.`;

const Introtext = () => (
  <div style={{
    position: 'relative',
    background: '#ffff',
    padding: '32px 32px 32px 48px',
    margin: '40px auto',
    maxWidth: 1800,
    minWidth: 300,
    fontFamily: 'Arial, sans-serif',
    fontWeight: 500,
    fontSize: "clamp(14px, 2vw, 24px)",
    color: '#222',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    borderRadius: '8px',
    textAlign:'center',
    padding:'40px',
  }}>
    {/* Opening quote */}
    <span style={{
      position: 'absolute',
      top: '-50px',
      left: '-3px',
      fontSize: '150px',
      color: '#e0e0e0',
      fontFamily: 'serif',
      fontWeight: 'bold',
      userSelect: 'none',
       fontSize: "clamp(104px, 1vw, 150px)",
    }}>
      &ldquo;
    </span>
    <span>
      {quoteText}
    </span>
    {/* Closing quote */}
    <span style={{
      position: 'absolute',
      bottom: '-50px',
      right: '-3px',
      fontSize: '150px',
      color: '#e0e0e0',
      fontFamily: 'serif',
      fontWeight: 'bold',
      userSelect: 'none',
      fontSize: "clamp(104px, 5vw, 150px)",
    }}>
      &rdquo;
    </span>
  </div>
);

export default Introtext;
