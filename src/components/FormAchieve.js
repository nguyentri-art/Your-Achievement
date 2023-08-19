import React from 'react';
import { useState,useEffect } from 'react';
import './FormAchieve';
import axios from 'axios';

const FormAchieve = () => {

    const [name,setName] = useState("");
    const [achievement,setAchievement] = useState("");
    const [feel,setFeel] = useState("");
    const [tag,setTag] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
          'http://localhost:5000/register',{
            method: "post",
            body: JSON.stringify({name,achievement,feel,tag}),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          result = await result.json();
          console.warn(result);
          if(result){
            alert("Data saved succesfully");
            setName("");
            setAchievement("");
            setFeel("");
            setTag("");
          }
    }
    return (
        <div className="Form_Achieve">
        <form action="">
            <input type="text" placeholder="Owner and coop owner" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="achievement" placeholder="achievement" value={achievement} onChange={(e) => setAchievement(e.target.value)} />
            <input type="feel" placeholder="feeling" value={feel} onChange={(e) => setFeel(e.target.value)} />
            <input type="tag" placeholder="tag" value={tag}  onChange={(e) => setTag(e.target.value)} />
            <button type="submit" onClick={handleOnSubmit}>submit</button>
        </form>
        </div>
    );
}

export default FormAchieve