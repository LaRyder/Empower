import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigation, StyledSpacer } from './NavbarStyle';

import Day from '../Assets/day.png'
import Moon from '../Assets/moon.png'

function Navbar({ darkMode, swapTheme}) {
    const [navTop, setNavTop] = useState(true);

    const scrollControl = () => {
        if (window.scrollY <= 5) {
            setNavTop(true);
        } else {
            setNavTop(false);
        }
      };
      useEffect(() => {
        window.addEventListener('scroll', scrollControl);
      });
    return (
        <>
        <StyledNavigation top={navTop} darkMode={darkMode}>
            <div className="nav-cont">
                <Link to="/">
                <div className="title">
                <h1>Empower</h1>
                </div>
                </Link>
                
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Mentor</Link>
                    <Link to="/contact">Mentee</Link>
                    <Link to="/contact">Contact</Link>
                    <div onClick={swapTheme} className="img-cont">
                    <img src={darkMode ? Day: Moon} alt={darkMode ? 'Moon' : 'Day'} />
                    </div>
                </nav>
            </div>
        </StyledNavigation>
        <StyledSpacer />
    </>
    );
}

export default Navbar;