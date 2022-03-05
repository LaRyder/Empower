import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import Theme from '../Styles/themes'

import HeroImage from '../Assets/hero.jpg';

const HeroBanner = styled.div`
width: 100%;
height: 480px;
background: url(${HeroImage});
background-size: cover;
display: flex;
flex-direction: row-reverse;
@media(max-width: 800px) {
    justify-content: center;
    align-items: center;
}
.heroText {
    text-align: center;
    color: ${props => props.theme.black};
    font-size: 6rem;
    margin: 13rem 13rem;
    @media(max-width: 800px) {
        margin: 0;
        font-size: 6rem;
    }
    .bottonRow {
        @media(max-width: 800px){
            font-size: 4.5rem;
            margin-top: 3rem;
        }
    }
}
`
function Hero() {
    return (
        <>
        <HeroBanner>
        <div className="heroText">
                <h1 className="topRow">Women Empower Women</h1>
                <h2 className="bottonRow">Break The Bias</h2>
            </div>
        </HeroBanner>
        </>
        
    );
}

export default Hero;