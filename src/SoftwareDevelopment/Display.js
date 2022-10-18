import React from "react";
import './SoftwareDevelopment.css';
import "@fontsource/red-hat-display";
import './../min.css';
import product_life from './resources/product_life.svg'
function Display(){
    return(
                    <>
        <div className="body-works">

            <div className="div-60 div-num" style={{"color":"#5C86A7","vertical-align":"middle"}}>
            <h2>Give your product a <p style={{"color":"#6100FF"}}>life.</p></h2>
            <p style={{"color":"#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
            </div>
            <div className="div-40">
                <img src={product_life}/>
            </div>

        </div></>
    );


}
export default Display;