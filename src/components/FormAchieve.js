import React from 'react';
import { useState,useEffect } from 'react';
import './FormAchieve';
import axios from 'axios';

const FormAchieve = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get('/')
        .then(response => {
            setData(response);
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    },[]);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [achievement,setAchievement] = useState("");
    const [feel,setFeel] = useState("");
    const [tag,setTag] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
          'http://localhost:5000/register',{
            method: "post",
            body: JSON.stringify({name,email,achievement,feel}),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          result = await result.json();
          console.warn(result);
          if(result){
            alert("Data saved succesfully");
            setEmail("");
            setName("");
            setAchievement("");
            setFeel("");
            setTag("");
          }
    }

    return (
        <div className="Form_Achieve">
        <form action="">
            <input type="hidden" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="hidden" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="achievement" placeholder="achievement" value={achievement} onChange={(e) => setAchievement(e.target.value)} />
            <input type="feel" placeholder="feeling" value={feel} onChange={(e) => setFeel(e.target.value)} />
            <input type="tag" placeholder="tag" value={tag}  onChange={(e) => setTag(e.target.value)} />
            <button type="submit" onClick={handleOnSubmit}>submit</button>
        </form>
        </div>
    );
}

export default FormAchieve