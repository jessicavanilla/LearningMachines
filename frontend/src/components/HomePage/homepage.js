import React from 'react';
import '../../styles/HomePage/homepage.css';
import mascot from '../../assets/HomePage/mascot.png';
import Footer from '../../components/Footer/footer'; 
import ChatWidget from '../ChatWidget/chatwidget';

const Homepage = () => {
  return (
    <div className="page-container">
      <div className="homepage-container">
        <header className="header">
        <div className="daily">DAILY</div>
          <div className="closet">✨ CLOSET ✨</div>
            <div className="favs">FAVS</div>
        </header>

        <div className="main-content">
          <div className="avatar">
            <img src={mascot} alt="Person wearing hat" className="avatar-icon" />
          </div>

          <div className="closet-display">
            <div className="closet-frame">
              <div className="closet-top"> 
              </div>
              <div className="closet-doors">
              <div className="closet-door left-door">
              </div>
              <div className="closet-door right-door">
              </div>
            </div>
          </div>
        </div>

        <div className="inspo">
          <h2>Inspo:</h2>
          <div className="inspo-grid">
            <div className="inspo-item"></div>
            <div className="inspo-item"></div>
            <div className="inspo-item"></div>
            <div className="inspo-item"></div>
          </div>
        </div>
      </div>
      <ChatWidget />
      <Footer />
      </div>
    </div>
  );
};

export default Homepage;