import React from "react";
import "./Home.css"

export default class Home extends React.Component {
    render () {
        return (
            <div className="body">
                <header className="header">
                    <h1> <b><i>Let's</i></b> hear it for the <b>BOSSY ONES</b>. For those <b>LOUD, PROUD</b> women who STAND UP and speak out. </h1>
                </header>



                <div className="footNote">
                <footer>
                    <h1>For their confidence <b>AND</b> imperfection, <b>THEIR STRENGTH</b> and vulnerability. Let's <b>HEAR</b> it for <u><i>us!</i></u> </h1>
                </footer>
                </div>
            </div>
        );
    }  
}