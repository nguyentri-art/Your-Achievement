import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './Login';

const Navbar = () => {

    const [data,setData] = useState(null);

    const handleData = (data) => {
        console.log(data);
        setData(data);
    }

    const logo = require("../logo-YAchievement-removebg-preview.png").default;

    return (
    <div className='container_Navbar'>
        <div className='child-1'>
            <div className='logo_Image'/>
        </div>
        <div className="list_Navbar">
            <h3>YAchievement</h3>
            <h3>Challenge</h3>
            <form class="search_button_container" action="">
                <input type="text" placeholder='Search...' name="search" />
                <button type="submit" className='search_Button'><a>Click</a></button>
            </form>
        </div>
        <div className="child-2">
            <Login className="login_button" onData={handleData}/>
        </div>
    </div>
    );
}

export default Navbar;