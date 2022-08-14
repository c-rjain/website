import React from "react";
import './Visualization.css';
import "@fontsource/red-hat-display";
import './../min.css';
import visualizationBackground from "./resources/display-background.svg";
function Display(){
    return(
        <div className="body-visulization">
            
            <div style={{'text-align':'left',"z-index":1}}>
                <div className="heading-text-h2" style={{"margin-bottom":"20px","font-size":"4vw",'text-align':'left'}}>Visualization and</div>
                <div className="heading-text-h2" style={{"margin-bottom":"20px","font-size":"4vw",'text-align':'left'}}>Data Intelligence</div>
                <div className="para-text-h3" style={{"font-size":"1.5vw",'text-align':'left'}}>Lorem Ipsum is simply dummy text of the printing <br/>and  typesetting industry. Lorem Ipsum has been <br/> the industry's standard dummy text ever since the 1500</div>
            </div>
            <div className="visualiztion-heading">
                <img src={visualizationBackground} style={{width:'100%',height:'100%'}}/>
            </div>
            
        </div>
    );


}
export default Display;