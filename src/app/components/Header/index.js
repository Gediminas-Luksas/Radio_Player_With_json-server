import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import backarrow from './back-arrow.png';
import switchs from "./switch.png"

const Header = () => {
    return (
        <div className="header">
        <Link to={'/'}>
            <img className="left" src={backarrow} alt="back-arrow" />
        </Link>
            <img className="right" src={switchs} alt="switch" />
            <h1>STATIONS</h1>
        </div>
    );
  }
export default Header;