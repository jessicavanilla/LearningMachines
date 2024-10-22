import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Add Navigate
import WelcomeScreen from './components/WelcomeScreen/welcomescreen';
import Homepage from './components/HomePage/homepage';
import PieChart from './components/PieChart/piechart';
import LoginSignupScreen from './components/LoginSignupScreen/loginsignupscreen';

function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<WelcomeScreen />} />
    <Route path="/loginsignup" element={<LoginSignupScreen />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/piechart" element={<PieChart />} />
    <Route path="*" element={<Navigate to="/" />} />

    {/* Test Route */}
    <Route path="/test" element={<h1>Test Route Works!</h1>} />
  </Routes>
</Router>

  );
}

export default App;
