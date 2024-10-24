import React, { useState } from 'react';
import '../../styles/ChatWidget/modalwindow.css';

const ModalWindow = ({ visible, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState(''); // State to track input value

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (inputValue) {
      console.log(inputValue) // Pass the input value to the parent component via onSubmit
    }
  };

  // If the modal is not visible, return null
  if (!visible) return null;

  return (
    <div className="chat-modal-window">
      {/* Text Output */}
      <div className="chat-output-container">
        <textarea className="chat-modal-text-output" disabled rows="14"/>
      </div>
      {/* Text Input & submit button */}
      <div className="chat-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="chat-modal-text-input"
          placeholder="How can I help?"
        />
        
        <button className="chat-modal-submit-button" onClick={handleSubmit}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
