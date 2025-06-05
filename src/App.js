import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

import Content from './components/Content';

import CertificateHistory from './components/CertificateHistory';



function App() {

  return (
      <div className="container">
        <Header />
        <Content />
        <CertificateHistory />
      </div>
  );

}

export default App;
