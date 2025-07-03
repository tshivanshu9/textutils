import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  const toggleColor = () => {
    if (mode === 'light') {
      setColor('light');
    } else {
      setColor('dark');
    }
  };
  return (
    <>
      {/* <Navbar title = "textutils" aboutText = "Aboutext"/> */}
      <Navbar mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} color={color}/>
      <div className="container my-3">
      <TextForm heading = "Enter your text to analyze" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
