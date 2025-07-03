import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('dark');
  const [alert, setAlert] = useState(null);
  const [greenColor, setGreenColor] = useState('light');

  const toggleMode = () => {
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
      <Navbar mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} color={color} toggleGreenColor={toggleGreenColor} />
      <div className="container my-3">
        <Alert alert={alert} />
        <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
