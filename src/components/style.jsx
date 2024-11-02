// src/components/Button.jsx
import React from 'react';
import '/css/main.css'; // Importing the CSS styles

import '/css/index.css'; // Importing the CSS styles

import '/css/cards.css'; // Importing the CSS styles

import '/css/langs.css'

const Button = ({ label }) => {
  return (
    <button className="button">
      {label}
    </button>
  );
};

export default Button;
