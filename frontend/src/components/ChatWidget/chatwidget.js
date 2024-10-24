import React, { useState, useEffect, useRef } from 'react';
import { BsFillChatFill } from 'react-icons/bs';
import '../../styles/ChatWidget/chatwidget.css';
import ModalWindow from './modalwindow';

const ChatWidget = () => {
  const [hovered, setHovered] = useState(false); // Track hover state
  const [visible, setVisible] = useState(false); // Track modal visibility
  const widgetRef = useRef(null);

  // Handle clicks outside the widget to close the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [widgetRef]);

  // Toggle visibility of the modal window
  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div ref={widgetRef}>
      {/* Modal Window */}
      {visible && <ModalWindow visible={visible} onClose={() => setVisible(false)} />}

      {/* Chat Button */}
      <div
        className={`chat-widget ${hovered ? 'hovered' : ''}`} // Add hover class dynamically
        onClick={handleToggleVisible}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="chat-widget-inner">
          {/* Chat Icon */}
          <BsFillChatFill size={20} color="white" />
          {/* Chat Text */}
          <span className="chat-widget-text">Chat</span>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;

