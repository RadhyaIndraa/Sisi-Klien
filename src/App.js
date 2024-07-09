import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Home from './Home';
import Mahasiswa from './Mahasiswa';
import About from './About';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <nav className="bg-gray-800 p-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mahasiswa">Mahasiswa</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
