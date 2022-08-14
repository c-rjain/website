import React from "react";
import './Visualization.css';
import "@fontsource/red-hat-display";
import Display from "./Display";
import Decision from "./Decision";
import Dashboard from "./Dashboard";
import TruthBoard from "./TruthBoard";
import VisualizationEngineer from "./VisualizationEngineer"
function Visualization(){
    return(
        <div>
        <Display/>
        <Decision/>
        <Dashboard/>
        <TruthBoard/>
        <VisualizationEngineer/>
        </div>
    );


}
export default Visualization;