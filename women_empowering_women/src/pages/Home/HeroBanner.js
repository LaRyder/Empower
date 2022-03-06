import React from 'react';
import {HeroLauren, HeroBrenda, HeroSynthia, ImageDiv, Share} from './HeroBannerStyle.js';

function Hero() {
    return (
        <>
        <ImageDiv>
        <HeroBrenda/>
        <HeroLauren>
        <div className="heroText">
                <h1 className="topRow">Empower Women</h1>
                <h2 className="bottonRow">Break The Bias</h2>
            </div>
        </HeroLauren>
        <HeroSynthia>
        <Share size="small">Share Your Story</Share>
        </HeroSynthia>
        </ImageDiv>
    
        </>
        
    );
}

export default Hero;