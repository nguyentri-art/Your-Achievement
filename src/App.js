import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';


 function App() {
  return (
    <div className="App">
      <Router>
            <Navbar />
            {/* <Header />
            <Main />
            <Footer />  */}
       
      </Router>
   
    </div>
  );
}


export default App;
