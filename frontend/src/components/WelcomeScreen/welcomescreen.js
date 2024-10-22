import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import '../../styles/WelcomeScreen/welcomescreen.css';
import hangerImage from '../../assets/WelcomeScreen/hanger.png';
import tabletImage from '../../assets/WelcomeScreen/tablet.png';
import phoneImage from '../../assets/WelcomeScreen/blackphone.png';
import clothes1 from '../../assets/WelcomeScreen/clothes1.png';
import clothes2 from '../../assets/WelcomeScreen/clothes2.png';
import clothes3 from '../../assets/WelcomeScreen/clothes3.png';
import clothes4 from '../../assets/WelcomeScreen/clothes4.png';
import clothes5 from '../../assets/WelcomeScreen/clothes5.png';
import clothes6 from '../../assets/WelcomeScreen/clothes6.png';

const clothesImages = [clothes1, clothes2, clothes3, clothes4, clothes5, clothes6];

const WelcomeScreen = () => {
  const [leftPhoneIndex, setLeftPhoneIndex] = useState(0);  
  const [rightPhoneIndex, setRightPhoneIndex] = useState(1);
  const [isTabletClicked, setIsTabletClicked] = useState(false);  //  track tablet click
  const navigate = useNavigate();  

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftPhoneIndex((prevIndex) => (prevIndex + 1) % clothesImages.length);
    }, 3000); 
  
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRightPhoneIndex((prevIndex) => (prevIndex + 1) % clothesImages.length);
    }, 3000); 
  
    return () => clearInterval(interval);
  }, []);

  const handleTabletClick = () => {
    setIsTabletClicked(true);  // Trigger the text expansion
  };

  const handleTextClick = () => {
    navigate('/loginsignup');  // Navigate to login when text is clicked
  };
  
  return (
    <div className="welcome-screen">
      <div className="stars-background"></div>
        
      <div className="hanger-container">
        <img src={hangerImage} alt="hanger1" className="hanger" />
        <img src={hangerImage} alt="white-hanger1" className="hanger white-hanger" />
        <img src={hangerImage} alt="hanger2" className="hanger" />
        <img src={hangerImage} alt="white-hanger2" className="hanger white-hanger" />
        <img src={hangerImage} alt="hanger3" className="hanger" />
      </div>

      <div className="phone-tablet-container">
        <div className="phone">
          <img src={phoneImage} alt="phone-left" className="phone-frame" />
          <img src={clothesImages[leftPhoneIndex]} alt={`clothes-${leftPhoneIndex}`} className="clothes-image" />
        </div>
        
        <div 
          className={`tablet-container ${isTabletClicked ? 'tablet-clicked' : ''}`} 
          onClick={handleTabletClick}  
        >
          <img src={tabletImage} alt="tablet" className="tablet" />
          <h1 
            className={`welcome-text ${isTabletClicked ? 'text-expanded' : ''}`} 
            onClick={handleTextClick} 
          >
            Welcome to [INSERT NAME]
          </h1>
        </div>
        
        <div className="phone">
          <img src={phoneImage} alt="phone-right" className="phone-frame" />
          <img src={clothesImages[rightPhoneIndex]} alt={`clothes-${rightPhoneIndex}`} className="clothes-image" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
