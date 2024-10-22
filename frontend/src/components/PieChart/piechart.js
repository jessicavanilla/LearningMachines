import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Footer from '../Footer/footer'; // Reuse the Footer component
import '../../styles/PieChart/piechart.css'; // Add your styles

const PieChart = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMiniBoxClick = () => {
    navigate('/homepage'); // Navigate back to homepage
  };

  return (
    <div className="clothes-chart-page-container">
      <div className="circle-container">
        <div className="big-circle">
          {/* Placeholder for future pie chart */}
        </div>
        <div className="mini-box" onClick={handleMiniBoxClick}>
          Back to Homepage
        </div>
      </div>
      <Footer /> {/* Keep the footer with the darkened pie chart */}
    </div>
  );
};

export default PieChart;
