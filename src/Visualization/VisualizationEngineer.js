import React from "react";
import './Visualization.css';
import "@fontsource/red-hat-display";
import './../min.css';
import employee from './resources/employee.svg';

import decisionBoard from "./resources/decision-board.svg";
import './../min.css';
function VisualizationEngineer(){
    return(
        // <div className="body-deicison">
            
            
        //     <div className="logo-heading">
        //         <img src={visualizationBackground} style={{width:'100%',height:'300px'}}/>
        //     </div>
        //     <div>
        //         <div className="heading-text-h2" style={{"margin-bottom":"20px"}}>Visualization and</div>
        //         <div className="heading-text-h2" style={{"margin-bottom":"20px"}}>Data Intelligence</div>
        //         <div className="para-text-h3" style={{"font-size":"1.5vw",'text-align':'left'}}>Lorem Ipsum is simply dummy text of the printing <br/>and  typesetting industry. Lorem Ipsum has been <br/> the industry's standard dummy text ever since the 1500</div>
        //     </div>
        //     </div>
<> 
<div className="heading-text-h2" style={{'padding-bottom':'20px','text-align':'center','font-size':'45px'}}>Hire a virtualization engineer section</div>
<div className="para-text-h3">Get Everyone on Same Page looking at the right data</div>
<div className="row">
                <div className="box">
                    <img src={employee} style={{width:'100%'}}/>
                    <h1 className="heading-text-h3">Dilip Yadav</h1>
                    <h3 className="heading-text-h3">Singer</h3>
                    <p className="para-text-h3">Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p> 
                </div>
                <div className="box">
                    <img src={employee} style={{width:'100%'}}/>
                    <h1 className="heading-text-h3">Vikhyat Shetty</h1>
                    <h3 className="heading-text-h3">Cloud Engineer</h3>
                    <p className="para-text-h3">Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p>
                </div>
                <div className="box">
                    <img src={employee} style={{width:'100%'}}/>
                    <h1 className="heading-text-h3">Vikhyat Shetty</h1>
                    <h3 className="heading-text-h3">Cloud Engineer</h3>
                    <p className="para-text-h3">Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p>
                </div>
            </div>
 </>);
}
export default VisualizationEngineer;