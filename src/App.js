import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import MainPage from './components/MainPage';

import RegistrarPage from './components/RegistrarPage';



function App() {

  return (
      <Router>
          <div className="container">
              <Header />
              <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/registrar" element={<RegistrarPage />} />
              </Routes>
          </div>
      </Router>
  );

}

export default App;
