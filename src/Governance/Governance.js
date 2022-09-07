import React from "react";
import "@fontsource/red-hat-display";
import './../min.css';
import Display from "./Display";
import Works from "./Works";
import Security from "./Security";
import More from './More';
function Governance(){
    return(
        <div>
        <Display/>
        <Works/>
        <Security/>
        <More/>
        </div>
    );
}
export default Governance;