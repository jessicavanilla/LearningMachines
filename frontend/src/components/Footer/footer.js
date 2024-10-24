import React, { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Footer/footer.css';
import ProfilePic from '../../assets/Footer/defaultprofilepic.png';

const UploadModal = React.lazy(() => import('../HomePage/uploadmodel'));
const ProfileModal = React.lazy(() => import('./profilemodal'));

const Footer = ({ applyPieChartStyles }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [userData, setUserData] = useState(null); 
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleProfileModal = () => {
    setIsProfileModalVisible(!isProfileModalVisible);
  };

  const handlePieChartClick = () => {
    navigate('/piechart');
  };

  const fetchUserProfile = async () => {
    try {
        const token = localStorage.getItem('authToken'); 
        const response = await fetch('http://127.0.0.1:8000/api/users/profile/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const data = await response.json();
            setUserData(data);
            toggleProfileModal();
        } else {
            console.error('Failed to fetch user profile');
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
  };
  
  return (
    <>
      <footer className="footer">
        <div
          className={`footer-item pie-chart ${applyPieChartStyles ? 'pie-chart-styled' : ''}`}
          onClick={handlePieChartClick}
        >
          <div className="circle">
            <div className="line"></div>
            <div className="line-right"></div>
          </div>
        </div>

        <div className="footer-item add-container" onClick={toggleModal}>
          <div className="add-icon-container">
            <div className="attachment-circle"></div>
            <div className="add-icon">+</div>
          </div>
        </div>

        <div className="footer-item profile-pic" onClick={fetchUserProfile}>
          <div className="profile-circle">
            <img src={ProfilePic} alt="Profile" className="profile-image" />
          </div>
        </div>
      </footer>

      {/* Lazy load the modals */}
      <Suspense fallback={<div>Loading...</div>}>
        {isModalVisible && <UploadModal isVisible={isModalVisible} onClose={toggleModal} />}
        {isProfileModalVisible && (
          <ProfileModal
            isVisible={isProfileModalVisible}
            onClose={toggleProfileModal}
            userData={userData}
          />
        )}
      </Suspense>
    </>
  );
};

export default Footer;
