import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Login from './login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
            <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
            <Link to="/contact" style={{ marginRight: "10px" }}>Contact</Link>
            <Link to="/login">Login</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
