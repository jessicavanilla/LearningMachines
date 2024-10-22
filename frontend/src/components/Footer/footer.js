import React, { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Footer/footer.css';
import ProfilePic from '../../assets/Footer/defaultprofilepic.png';

const UploadModal = React.lazy(() => import('../HomePage/uploadmodel'));
const ProfileModal = React.lazy(() => import('./profilemodal'));

const Footer = ({ applyPieChartStyles }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
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

  return (
    <>
      <footer className="footer">
        <div
          className={`footer-item pie-chart ${
            applyPieChartStyles ? 'pie-chart-styled' : ''
          }`}
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

        <div className="footer-item profile-pic" onClick={toggleProfileModal}>
          <div className="profile-circle">
            <img src={ProfilePic} alt="Profile" className="profile-image" />
          </div>
        </div>
      </footer>

      {/* Use Suspense to lazy load the modals */}
      <Suspense fallback={<div>Loading...</div>}>
        {isModalVisible && <UploadModal isVisible={isModalVisible} onClose={toggleModal} />}
        {isProfileModalVisible && <ProfileModal isVisible={isProfileModalVisible} onClose={toggleProfileModal} />}
      </Suspense>
    </>
  );
};

export default Footer;
