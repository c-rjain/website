import React from "react";
import './SoftwareDevelopment.css';
import "@fontsource/red-hat-display";
import './../min.css';
import architecture_design from './resources/architecture_design.svg';
import product_life_computer from './resources/product_life_computer.svg';
import kubernetes from './resources/kubernetes.svg';
function ArchitectureDesign(){
    return(
        <div className="bodyArchDesign">
        <div style={{"padding-left":"5%"}}>
            <h1>Architecture & Design</h1>

        </div>
        <div className="body-sd">
            
            <div className="div-60 div-num" style={{"color":"#5C86A7","vertical-align":"middle"}}>
            <h2>Give your product a <p style={{"color":"#6100FF"}}>life.</p></h2>
            <p style={{"color":"#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
            </div>
            <div className="div-40">
                <img src={architecture_design}/>
            </div>

        </div>

        <div style={{"width":"100%","text-align":"center"}}>
        <h1>Give you Product A Life</h1>
        <div className="row">
                <div className="box" style={{"box-shadow":"none"}}>
                    <h1>Life comes into a product</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ol>
                        <li className="bg-black">We’ll prepare a proposal</li>
                        <li className="bg-black">We’ll prepare a proposal</li>
                        <li className="bg-black">We’ll prepare a proposal</li>

                    </ol>
                </div>
                <div className="box" style={{"box-shadow":"none"}}>
                    <img src={product_life_computer}/>
                </div>
                <div className="box" style={{"box-shadow":"none"}}>
                <h1>Platforms</h1>
                    
                <div>
                    <div style={{"display":"flex","flex-direction":"row"}}> <img src={kubernetes}/><h1 style={{"margin":"20px"}}> Devops As Service</h1></div>
                    <p>Let us streamline your organization’s adoption of DevOps practices. We’ll provide a complete turnkey Devops solution your team can run with well into the future.</p>
                    
                    </div>
                </div>
           </div>


        </div>
        </div>
    );


}
export default ArchitectureDesign;