import React from "react";
import './SoftwareDevelopment.css';
import "@fontsource/red-hat-display";
import './../min.css';
import architecture_design from './resources/architecture_design.svg';
import devops from './resources/devops.svg';
import services from './resources/services.svg';
import aws from './resources/aws.svg';

function DevOps(){
    return(
        <>

        <div style={{"width":"100%","text-align":"center"}}>
        <h1>DevOps Automation</h1>
        <div className="row">
            <div className="box" style={{"box-shadow":"none"}}>
                    <img src={devops}/>
                </div>
                <div className="box" style={{"box-shadow":"none"}}>
                    <div>
                    <div style={{"display":"flex","flex-direction":"row"}}> <img src={services}/><h1 style={{"margin":"20px"}}> Devops As Service</h1></div>
                    <p>Let us streamline your organization’s adoption of DevOps practices. We’ll provide a complete turnkey Devops solution your team can run with well into the future.</p>
                    
                    </div>
                </div>
                
                <div className="box" style={{"box-shadow":"none"}}>
                <div>
                    <div style={{"display":"flex","flex-direction":"row"}}> <img src={services}/><h1 style={{"margin":"20px"}}> Devops As Service</h1></div>
                    <p>Let us streamline your organization’s adoption of DevOps practices. We’ll provide a complete turnkey Devops solution your team can run with well into the future.</p>
                    
                    </div>
                </div>
           </div>
           
           <div style={{"width":"100%"}}>
                <div className="box" style={{"box-shadow":"none"}}>
                <img src={aws} style={{"width":"100%"}}/>
                </div>
                <div className="box" style={{"box-shadow":"none"}}>
                <img src={aws} style={{"width":"100%"}}/>
                </div>
                <div className="box" style={{"box-shadow":"none"}}>
                <img src={aws} style={{"width":"100%"}}/>
                </div>

            </div>
        </div>
        </>

    );


}
export default DevOps;