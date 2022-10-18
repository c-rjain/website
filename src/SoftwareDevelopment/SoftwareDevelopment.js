import React from "react";
import './SoftwareDevelopment.css';
import "@fontsource/red-hat-display";
import Display from "./Display";
import ArchitectureDesign from "./ArchitectureDesign";
import DevOps from './DevOps';
function Prototyping(){
    return(
        <div>
        <Display/>
        <ArchitectureDesign/>
        <DevOps/>
        </div>
    );


}
export default Prototyping;