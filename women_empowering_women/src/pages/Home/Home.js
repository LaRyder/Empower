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
                <Success/>
                <Success/>
                </div>
                </div>

                <TrainingPeer/>

                <div className="footNote">
                <footer>
                    <h1>For their confidence <b>AND</b> imperfection, <b>THEIR STRENGTH</b> and vulnerability. Let's <b>HEAR</b> it for <u><i>us!</i></u> </h1>
                </footer>
                </div>
            </div>
        );
        
       
    }  
}