import logo from './logo.svg';
import Textform from './components/Textform';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'

function App() {
  return (
    <>
    <div className="App">
      <Navbar title="Kaustubha" />
      <Textform heading="propheading"/>
    </div>
    <div className="container my-5">
      <About />
    </div>
    </>
  );
}

export default App;
