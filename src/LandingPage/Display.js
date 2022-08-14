import React from "react";
import './LandingPage.css';
import "@fontsource/red-hat-display";
import confederacie from './resources/confederacie.svg';
import './../min.css';

function Display(){
    return(
        <div className="body-display">
            
            <div style={{align:'left'}}>
                <div className="heading-text-h2" style={{color: "#486675","margin-bottom":"20px"}}>Help Every Digital Dream</div>
                <div className="heading-text-h2 underline" style={{color: "#FFC400","margin-bottom":"20px"}}>Come Alive</div>
                <div className="source-button">Open Source Library</div>
            </div>
            <div className="logo-heading">
                <img src={confederacie} style={{width:'100%',height:'300px'}}/>
            </div>
            
        </div>
    );


}
export default Display;