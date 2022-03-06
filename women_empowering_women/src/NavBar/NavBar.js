import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export default class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <div className="navContainer">
          <div className="headerInner">
            <ul>
              <div className="links">
                <Link className="navButton" to="/">Home</Link>
                <Link className="navButton" to="/mentor">Mentor</Link>
                <Link className="navButton" to="/share" >Share Your Story</Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}