import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import Pract from './components/Pract';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whethwer dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now"
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = "TextUtils - Light Mode"

    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils"  aboutText="About Us" /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
      {/* <Pract/> */}
    </>
  );
}

export default App;









