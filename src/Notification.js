import React from 'react';
import './Notification.js';
import profile from './profile.jpeg';
function Notification() {
  return (
    <div className="container">
      <h1>Position Relative & Absolute Task</h1>
      
      <div className="profile-card">
        <div className="notification-badge">3</div>
        <img 
          src={profile} 
          alt="Profile" 
          className="profile-image"
        />
        <h3>John Doe</h3>
        <p>Web Developer</p>
      </div>

    </div>
  );
}

export default Notification;