import React from 'react';
import {HeroBanner} from './HeroBannerStyle.js';

function Hero() {
    return (
        <>
        <HeroBanner>
        <div className="heroText">
                <h1 className="topRow">Empower Women</h1>
                <h2 className="topRow">Break The Bias</h2>
            </div>
        </HeroBanner>
    
        </>
        
    );
}

export default Hero;