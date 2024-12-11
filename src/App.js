import logo from './logo.svg';
import Textform from './components/Textform';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = "black";
      document.title = "TextUtils-Light"


    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-Dark"
    }
  }
  return (
    <>
      <Router>
        <div className="App" >
          <Navbar title="Kaustubha" mode={mode} toggleMode={togglemode} />
        </div>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textform />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
