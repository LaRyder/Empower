import React from "react";
import "./Home.css";
import Success from "./Success";
import TrainingPeer from "./Training and Peer";
import Hero from "./HeroBanner"

export default class Home extends React.Component {
    render () {
        return (
            <div className="body">
                <Hero/>
                <div className="stories-section">
                <h1>Success Stories</h1>
                <div className="success">
        
                <Success/>
                </div>
                </div>

                <TrainingPeer/>
            </div>
        );
        
       
    }  
}