import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/textform';
// import { Router, Route,  } from 'react-router-dom'
import {
  BrowserRouter as Router,
Routes,
  Route,
} from "react-router-dom";

function App() {
  const [btnText, setBtnText] = useState("Enable dark mode")
  const [mode, setMode] = useState('light'); // whether the dark mode is enable or not

   const toggleMode = () =>  {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setBtnText('Enable light mode')
      // showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("Light mode has been enabled", "success");
      setBtnText('Enable dark mode')
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <div className="container">
        <Routes>
          <Route path="/about"element={<About mode={mode}/>}/>

            {/* <About mode={mode} /> */}
          
          <Route path="/"element={<Textform heading="Text Area" mode={mode}/>}/>
            {/* <Textform heading="Text Area" mode={mode} /> */}
          
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
