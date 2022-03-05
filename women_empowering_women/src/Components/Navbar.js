import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigation, StyledSpacer } from './NavbarStyle';


function Navbar() {
    return (
        <>
        <StyledNavigation>
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
                </nav>
            </div>
        </StyledNavigation>
        <StyledSpacer />
    </>
    );
}

export default Navbar;