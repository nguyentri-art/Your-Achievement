import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
 
  return (
    <div className="App">
      <>
        <Navbar />
        <Main />
      </>
    </div>
  );
}

export default App;
