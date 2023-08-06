import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import SignIn from './components/SignIn';
import { useState,useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import 'dotenv/config';

const clientId = process.env.REACT_APP_GOOGLE_ID_KEY;
console.log(process.env.REACT_APP_GOOGLE_ID_KEY);

const App = function() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        plugin_name: "chat",
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const [loading,setLoading] = useState('Loading.....');
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    console.log('Login Success ', response);
    setUser(response.profileObj);
    setLoading();
  }

  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading();
  }
 
  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
  }
 
  const handleLogoutFailure = error => {
    console.log("Logout Failure ", error);
  }
 
  const handleRequest = () => {
    setLoading("Loading...");
  }
 
  const handleAutoLoadFinished = () => {
    setLoading();
  }



  return (
    <div>
      <h3>Login with Google -</h3>
     
      {user ? <div>
        <div className="name">Welcome {user.name}!</div>
        <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={handleLogoutSuccess}
          onFailure={handleLogoutFailure}
        />
        <pre>{JSON.stringify(user, null, 2)}</pre>
        </div> : 
        <GoogleLogin 
        clientId={clientId}
        buttonText={loading}
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        onRequest={handleRequest}
        onAutoLoadFinished={handleAutoLoadFinished}
        isSignedIn={true} />

      }
      {/* <Navbar />
      <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}


export default App;
