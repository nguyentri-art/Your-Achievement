import React from 'react';
import { useState,useEffect } from 'react';
import './FormAchieve.css';

const FormAchieve = () => {

    const [name,setName] = useState("");
    const [achievement,setAchievement] = useState("");
    const [email,setEmail] = useState("");
    const [feel,setFeel] = useState("");
    const [tag,setTag] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
          'http://localhost:5000/register',{
            method: "post",
            body: JSON.stringify({name,email,achievement,feel,tag}),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          result = await result.json();
          console.warn(result);
          if(result){
            alert("Data saved succesfully");
            setName("");
            setEmail("");
            setAchievement("");
            setFeel("");
            setTag("");
          }
    }
    return (
        <div className="Form_Achieve">
          <form action="" className="form_input">
              <input className="form_name" type="text" placeholder="Owner and coop owner" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="form_email" type="text" placeholder="email contact" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="form_achievement" type="achievement" placeholder="achievement" value={achievement} onChange={(e) => setAchievement(e.target.value)} />
              <input className="form_feel" type="feel" placeholder="feeling" value={feel} onChange={(e) => setFeel(e.target.value)} />
              <input className="form_tag" type="tag" placeholder="tag" value={tag}  onChange={(e) => setTag(e.target.value)} />
              <button type="submit" onClick={handleOnSubmit}>submit</button>
          </form>
        </div>
    );
}

export default FormAchieve