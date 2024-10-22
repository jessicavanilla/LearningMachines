import React, { useState } from 'react';
import '../../styles/Footer/profilemodal.css'; 

const ProfileModal = ({ isVisible, onClose }) => {
  const [name, setName] = useState('John Doe'); // HARD coded for now
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('password123'); // This will be hidden

  const handleApplyChanges = () => {
    alert('Changes applied successfully!');
    onClose(); 
  };

  const handleCancel = () => {
    onClose(); 
  };

  if (!isVisible) return null;

  return (
    <div className="profile-modal-overlay">
      <div className="profile-modal">
        <h2>Profile Information</h2>
        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="apply-btn" onClick={handleApplyChanges}>
              Apply Changes
            </button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
