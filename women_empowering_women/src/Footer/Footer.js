import React from 'react';
import { FooterMain, FooterDivLink, StyledFooter } from "./FooterStyle";

import Twitter from '../images/Twitter.png'
import LinkedIn from '../images/linkedin.png'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
      };
    return (
    <>
        <StyledFooter>
        <button onClick={scrollToTop}>Back to Top</button>
        </StyledFooter>
        <FooterMain>
            <FooterDivLink>
            <div className="sm-icons">
				<a><img src={Twitter} alt="Twitter" /></a>
                <a> <img src={Twitter}  alt="Facebook" /></a>
                <a> <img src={LinkedIn}  alt="LinkedIn" /></a>
            </div>
                <div>#BreakTheBias</div>
            </FooterDivLink>
        </FooterMain>
    </>
    )
};

export default Footer;