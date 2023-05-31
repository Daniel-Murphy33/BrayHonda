import logo from './logo.svg';
import './styles/App.css';
import BookingScreen from './components/BookingScreen';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>

    <div>
      <Routes>
        {/* Other routes */}
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/booking" element={<BookingScreen />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
