import React from "react";
import './Virtualization.css';
import "@fontsource/red-hat-display";
import './../min.css';
import displayOverlay from "./resources/display-overlay.svg";
function Display(){
    return(
        <div className="body-virtualization">
            <div className="rectangle-display1">

            </div>
            <div className="rectangle-display2">
                <h2 className="display-virtualization-text">Virtualization</h2>
                <p className="display-virtualization-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <img className="display-overlay" src={displayOverlay}/>
        </div>
    );


}
export default Display;