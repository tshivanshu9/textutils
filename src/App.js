import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('dark');
  const [alert, setAlert] = useState(null);
  const [greenColor, setGreenColor] = useState('light');

  const removeBgClasses = () => {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
  };

  const toggleMode = (cls) => {
    removeBgClasses();
    document.body.classList.add(`bg-${cls}`);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const toggleColor = () => {
    if (mode === 'light') {
      setColor('light');
    } else {
      setColor('dark');
    }
  };

  const toggleGreenColor = () => {
    if (greenColor === 'light') {
      setGreenColor('green');
      setMode('green');
      document.body.style.backgroundColor = 'green';
      showAlert('Green mode has been enabled', 'success');
    } else {
      setGreenColor('light');
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Navbar title = "textutils" aboutText = "Aboutext"/> */}
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} color={color} toggleGreenColor={toggleGreenColor} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
