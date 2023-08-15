import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
// import server from './mongo-db/server';
import { useState } from 'react';

function App() {
  // // console.log(server());
  // const [name,setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [achievement,setAchievement] = useState("");
  // const [feel,setFeel] = useState("");
  // const [tag,setTag] = useState("");

  // const handleOnSubmit = async (e) => {
  //     e.preventDefault();
  //     let result = await fetch(
  //       'http://localhost:5000/register',{
  //         method: "post",
  //         body: JSON.stringify({name,email,achievement,feel}),
  //         headers:{
  //           'Content-Type': 'application/json'
  //         }
  //       })
  //       result = await result.json();
  //       console.warn(result);
  //       if(result){
  //         alert("Data saved succesfully");
  //         setEmail("");
  //         setName("");
  //         setAchievement("");
  //         setFeel("");
  //         setTag("");
  //       }
  // }
  return (
    <div className="App">
      <>
        <Navbar />
        <Main />
        {/* <h1>This is some Test backend </h1>
      <form action="">
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="achievement" placeholder="achievement" value={achievement} onChange={(e) => setAchievement(e.target.value)} />
        <input type="feel" placeholder="feeling" value={feel} onChange={(e) => setFeel(e.target.value)} />
        <input type="tag" placeholder="tag" value={tag}  onChange={(e) => setTag(e.target.value)} />
        <button type="submit" onClick={handleOnSubmit}>submit</button>
      </form> */}
      </>
    </div>
  );
}

export default App;
