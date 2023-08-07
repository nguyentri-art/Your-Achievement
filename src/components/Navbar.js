import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './Login';

const Navbar = () => {

    const logo = require("../logo-YAchievement-removebg-preview.png").default;

    return (
    <div className='container_Navbar'>
        <div className='child-1'>
            <div className='logo_Image'/>
        </div>
        <div className="list_Navbar">
            <h3>YAchievement</h3>
            <h3>Challenge</h3>
        </div>
        <div className="child-2">
            <Login className="login_button"/>
        </div>
    </div>
    );
}

export default Navbar;