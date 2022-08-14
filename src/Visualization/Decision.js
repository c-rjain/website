import React from "react";
import './Visualization.css';
import "@fontsource/red-hat-display";
import './../min.css';
import decisionBoard from "./resources/decision-board.svg";
function Decision(){
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
<>    <div className="decision-background"></div>
<div className="body-decision">
<div className="decision-board-text" style={{align:'left'}}>
        <br/>
    <div className="heading-text-h2" style={{"margin-bottom":"20px"}}>Empower everyone to make data-driven decisions
    <div className="para-text-h3">Lorem Ipsum is simply dummy text of the printing <br/>and  typesetting industry. Lorem Ipsum has been <br/> the industry's standard dummy text ever since the 1500</div>

</div>
</div>
<div className="decision-board-heading">
    <img src={decisionBoard} style={{width:'100%'}}/>
</div>

</div>
</>

            
    );


}
export default Decision;