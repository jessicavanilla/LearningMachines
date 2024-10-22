import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Footer from '../Footer/footer'; 
import '../../styles/PieChart/piechart.css'; 

const PieChart = () => {
  const navigate = useNavigate();

  const handleMiniBoxClick = () => {
    navigate('/homepage'); 
  };

  return (
    <div className="clothes-chart-page-container">
      <div className="circle-container">
        <div className="big-circle">
        </div>
        <div className="mini-box" onClick={handleMiniBoxClick}>
          Back to Homepage
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default PieChart;
