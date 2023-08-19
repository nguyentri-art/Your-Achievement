import React from 'react';
import "./Login.css";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useState,useEffect } from 'react';
import 'dotenv/config';

const clientId = process.env.REACT_APP_GOOGLE_ID_KEY;

const Login = (props) => {

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
    props.onData(response.profileObj);
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
    <div className="Login_Button">
        {user ? <div className="google_LoginButton">
        <img src={user.imageUrl} className="image_Avatar"/>
        <div className="name"><h3>{user.name}</h3></div>
        <GoogleLogout 
            clientId={clientId}
            onLogoutSuccess={handleLogoutSuccess}
            onFailure={handleLogoutFailure}
        />
        </div > : 
        <GoogleLogin 
        clientId={clientId}
        buttonText={loading}
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        onRequest={handleRequest}
        onAutoLoadFinished={handleAutoLoadFinished}
        isSignedIn={true} 
        />
        }
    </div>
    );
}

export default Login;