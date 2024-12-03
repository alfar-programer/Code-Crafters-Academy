import React from 'react'; // Import React if needed (depends on your React version)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './App.css'; // Import your custom CSS
import Navbar from './components/Navbar';
import Attendance from './components/Attendance';
import About from './components/About';
import Home from './components/Home';
import Develope from './components/Develope';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/src/components/Home.js' element={<Home />} /> {/* Fix here */}
          <Route path='/src/components/Develope.js' element={<Develope />} /> {/* Fix here */}
          <Route path='/src/components/About.js' element={<About />} /> {/* Fix here */}
          <Route path='/src/components/Attendance.js' element={<Attendance />} /> {/* Fix here */}
          {/* Add more Routes as needed */}
        </Routes>
       
      </div>
    </Router>
  );
}


export default App;
      