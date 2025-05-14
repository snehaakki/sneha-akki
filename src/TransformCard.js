import React from 'react';
import './TransformCard.css';

function TransformCard() {
  return (
    <div className="transform-container">
      <h1>Transform Translate Example</h1>
      
      <div className="transform-card">
        <div className="card-content">
          <h3>Hover Me!</h3>
          <p>I will move up</p>
        </div>
      </div>

      <div className="transform-card">
        <div className="card-content">
          <h3>Hover Me Too!</h3>
          <p>I will move right</p>
        </div>
      </div>

      <div className="transform-card">
        <div className="card-content">
          <h3>And Me!</h3>
          <p>I will move diagonally</p>
        </div>
      </div>
    </div>
  );
}

export default TransformCard;



