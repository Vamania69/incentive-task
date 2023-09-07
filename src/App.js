// import logo from './logo.svg';
import './App.css';
import "./index.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About.js';
function App() {
  return (
    <div className=" bg-primary">
    <Navbar/>
    <Home/>
    <About/>
    </div>
  );
}

export default App;
