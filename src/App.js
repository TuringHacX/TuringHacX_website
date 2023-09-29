// // DONT TOUCH THIS CODE
// import ReactGA from 'react-ga';
// const TRACKING_ID = "G-XNHWFTKFLM"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);
// // GOOGLE ANALYTICS

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import TimeLine from './pages/TimeLine';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/timeline' element={<TimeLine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
