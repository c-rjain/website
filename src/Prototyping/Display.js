import React from "react";
import './Prototyping.css';
import "@fontsource/red-hat-display";
import './../min.css';
import uiux_background from './resources/uiux-background.svg';
function Display(){
    return(
        <div className="body-prototyping">
            <div className="rectangle-display">
            </div>
            <div className="rectangle-display">
                <img src={uiux_background}/>
            </div>
        </div>
    );


}
export default Display;