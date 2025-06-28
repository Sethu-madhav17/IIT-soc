import React from 'react';

const quoteText = `Inverted commas are a kind of punctuation used to put the marks around certain phrases, or words that have specific importance in a sentence. To be precise, if certain phrases are taken from a poem and form a sentence then these punctuations are used.`;

const Introtext = () => (
  <div style={{
    position: 'relative',
    background: '#fff',
    padding: '32px 32px 32px 48px',
    margin: '40px auto',
    maxWidth: 1800,
    fontFamily: 'Arial, sans-serif',
    fontWeight: 500,
    fontSize: '36px',
    color: '#222',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    borderRadius: '8px'
  }}>
    {/* Opening quote */}
    <span style={{
      position: 'absolute',
      top: '-50px',
      left: '-40px',
      fontSize: '150px',
      color: '#e0e0e0',
      fontFamily: 'serif',
      fontWeight: 'bold',
      userSelect: 'none'
    }}>
      &ldquo;
    </span>
    <span>
      {quoteText}
    </span>
    {/* Closing quote */}
    <span style={{
      position: 'absolute',
      bottom: '-70px',
      right: '-40px',
      fontSize: '150px',
      color: '#e0e0e0',
      fontFamily: 'serif',
      fontWeight: 'bold',
      userSelect: 'none'
    }}>
      &rdquo;
    </span>
  </div>
);

export default Introtext;
