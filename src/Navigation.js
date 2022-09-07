import React from "react";
import { useState } from "react"
import './Navigation.css';
import "@fontsource/red-hat-display";
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import { Link } from "react-router-dom";

function Navigation(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return(
        <nav className="navigation">
        <a href="/" className="brand-name">
        <img src={logo}/>
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
         <img src={hamburger} style={{width:'100%'}}/>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/visualization">Visualization</Link>
            </li>
            <li>
              <a href="/virtualization">Virtualization</a>
            </li>
            <li>
              <a href="/governance">Governance</a>
            </li>
            <li>
              <a href="/contact">Option</a>
            </li>
            <li>
              <a href="/contact">Option</a>
            </li>
            <li>
              <a href="/contact">Option</a>
            </li>
            <li>
              <a href="/contact">Option</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Navigation;