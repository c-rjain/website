import React from "react";
import './Prototyping.css';
import "@fontsource/red-hat-display";

import ui_ux_design from './resources/ui-ux-design.svg';
import ux_audit from './resources/ux-audit.svg';
import product_discovery from './resources/product-discovery.svg';
import './../min.css';
function Works(){
    return(
        <>
        <div className="body-works">

            <div className="div-40 div-num" style={{"color":"#5C86A7"}}>
            <h1>How We Work.</h1>
            </div>
            <div className="div-60 div-num">
            <h3 style={{"color":"#5C86A7","padding":"10%;"}}>Designing intuitive and attractive products requires through preparation and deep expertise</h3>
            <p className="checkMarkDiv">Our product design process at UGEM consist of several phases that allow us to create products that meet business and user needs at the same time. Let’s consider our workflow to see what you can expect when working with us. </p>
            </div>

        </div>
        <div className="body-prototyping-bg">

        <div className="div-60 div-num">
         <h2>Product Discovery</h2>

            <p>The ide of Product Discover is to properly define requirements and key technological drivers in order to achieve particular business goals. Deep research helps you save time and money by focusing on the right design direction from the beginning. Working alongside our clients at this phase, we check the business and technical feasibility of your idea, calculate estimates, and clarify the preliminary scope of work</p>
            <p className="checkMarkDiv">Our product design process at UGEM consist of several phases that allow us to create products that meet business and user needs at the same time. Let’s consider our workflow to see what you can expect when working with us. </p>
            <ul>
                <li>Lean Canvas or Business Model Canvas</li>
                <li>Value Chain</li>

                <li>UX Review of existing functionality and competitive analysis report</li>
                <li>User Personas</li>
                <li>Feature breakdown list</li>
                <li>Functional and non-functional specifications and requirements</li>
            </ul>
            <p style={{"color":"#5C86A7"}}>Learn more about our product design discovery phase</p>

            <br/>
             <div className="vir-button">Share You requirements</div>
        </div>
        <div className="div-40 div-num" style={{"text-align":"right"}}>
            <img style={{"widht":"100%"}} src={product_discovery}/>
            <br/>
            <p style={{"color":"#5C86A7","font-size":"25px","text-align":"right"}}>Process</p>
            <div style={{"text-align":"right",}}><div className="vir-button" style={{"background":"#fff","color":"#008FFF","height":"50px",}}>Research Analyst</div></div>
            <div className="vir-button" style={{"background":"#fff","color":"#008FFF","height":"50px",}}>Scope Definition</div>

        </div>
    
        </div>
        <div className="body-works">
        <div className="div-40 div-num" style={{"text-align":"right"}}>
    <img style={{"widht":"100%"}} src={product_discovery}/>
    <br/>
    <p style={{"color":"#5C86A7","font-size":"25px","text-align":"right"}}>Process</p>
    <div className="vir-button" style={{"background":"#F5F5F5","color":"#008FFF","height":"50px",}}>Research Analyst</div>
    <div className="vir-button" style={{"background":"#F5F5F5","color":"#008FFF","height":"50px",}}>Scope Definition</div>

</div>
<div className="div-60 div-num">
 <h2>Product Discovery</h2>

    <p>The ide of Product Discover is to properly define requirements and key technological drivers in order to achieve particular business goals. Deep research helps you save time and money by focusing on the right design direction from the beginning. Working alongside our clients at this phase, we check the business and technical feasibility of your idea, calculate estimates, and clarify the preliminary scope of work</p>
    <p className="checkMarkDiv">Our product design process at UGEM consist of several phases that allow us to create products that meet business and user needs at the same time. Let’s consider our workflow to see what you can expect when working with us. </p>
    <ul>
        <li>Lean Canvas or Business Model Canvas</li>
        <li>Value Chain</li>

        <li>UX Review of existing functionality and competitive analysis report</li>
        <li>User Personas</li>
        <li>Feature breakdown list</li>
        <li>Functional and non-functional specifications and requirements</li>
    </ul>
    <p style={{"color":"#5C86A7"}}>Learn more about our product design discovery phase</p>

    <br/>
     <div className="vir-button">Share You requirements</div>
</div>


</div>
    </>

    );
}
export default Works;
            
           
