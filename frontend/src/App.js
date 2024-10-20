import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen/welcomescreen';
import LoginSignupScreen from './components/LoginSignupScreen/loginsignupscreen'; // Placeholder for your login/signup component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/loginsignup" element={<LoginSignupScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
