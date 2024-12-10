import logo from './logo.svg';
import Textform from './components/Textform';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import { useState } from 'react';

function App() {
  const [mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='dark'){
      setmode('light');
    }
    else{
      setmode('dark');
    }
  }
  return (
    <>
    <div className="App" >
      <Navbar title="Kaustubha" mode={mode} toggleMode={togglemode} />
      <Textform heading="propheading" mode={mode} />
    </div>
    <div className="container my-5">
      <About mode={mode} />
    </div>
    </>
  );
}

export default App;
