import React from "react";
import './Visualization.css';
import "@fontsource/red-hat-display";
import './../min.css';
import decisionBoard from "./resources/decision-board.svg";
function TruthBoard(){
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
<div style={{'margin-bottom':'200px'}}>    
<div className="heading-text-h2" style={{'padding-bottom':'20px','text-align':'center','font-size':'45px'}}>A Single Source of Truth</div>
<div className="para-text-h3" style={{'text-align':'center'}}>Get Everyone on Same Page looking at the right data</div>
<br/>
<div className="truthboard-nav">
        <p>Connect</p>
        <p>Prep</p>
        <p>Automate</p>
        <p>Explore</p>
        <p>Visualize</p>

</div>
<div style={{width:'80%','text-align':'center','margin-left':'10%','margin-bottom':'100px'}}>
    <img src={decisionBoard} style={{width:'100%'}}/>
   
</div>

<div className="truthboard-stack">
    <div className="truthboard-box" style={{width:'55%'}}>
        <div className="heading-text-h2" style={{'text-align':'left','font-size':'35px'}}>Request a Free Trial</div>
        <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
    </div>
    <div className="truthboard-box" style={{width:'22%'}}>
        <div className="heading-text-h3" style={{'text-align':'left','font-size':'20px'}}>Build 5 Desktop on Cloud for your team for free</div>
        <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
    </div>
    <div className="truthboard-box" style={{width:'22%'}}>
        <div className="heading-text-h3" style={{'text-align':'left','font-size':'20px'}}>Build 5 Desktop on Cloud for your team for free</div>
        <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
    </div>
</div>

<div className="truthboard-stack">
    <div className="truthboard-box" style={{width:'20%'}}>
        <div className="heading-text-h2" style={{'text-align':'left','font-size':'35px'}}>Request a Free Trial</div>
        <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
    </div>
    <div className="truthboard-box" style={{width:'20%'}}>
        <div className="heading-text-h3" style={{'text-align':'left','font-size':'20px'}}>Build 5 Desktop on Cloud for your team for free</div>
        <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
    </div>
    <div className="truthboard-box" style={{width:'20%'}}>
        <div className="heading-text-h3" style={{'text-align':'left','font-size':'20px'}}>Build 5 Desktop on Cloud for your team for free</div>
        <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
    </div>
    <div className="truthboard-box" style={{width:'20%'}}>
        <div className="heading-text-h3" style={{'text-align':'left','font-size':'20px'}}>Build 5 Desktop on Cloud for your team for free</div>
        <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
    </div>
    <div className="truthboard-box" style={{width:'20%'}}>
        <div className="heading-text-h3" style={{'text-align':'left','font-size':'20px'}}>Build 5 Desktop on Cloud for your team for free</div>
        <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
    </div>
</div>
</div>

            
    );


}
export default TruthBoard;