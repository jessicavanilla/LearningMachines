import React, { useState, useEffect } from 'react';
import '../../styles/Footer/profilemodal.css'; 

const ProfileModal = ({ isVisible, onClose, userData }) => {
  const [email, setEmail] = useState(userData ? userData.email : '');
  const [password, setPassword] = useState(''); 

  useEffect(() => {
    if (userData) {
      setEmail(userData.email);
    }
  }, [userData]);

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
