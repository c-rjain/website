import React from "react";
import './Visualization.css';
import "@fontsource/red-hat-display";
import './../min.css';
import decisionBoard from "./resources/decision-board.svg";
function Dashboard(){
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
<>    <div className="heading-text-h2" style={{'padding-bottom':'20px','text-align':'center'}}>What You Get with Dashboard</div>

<div className="body-dashboard" style={{'margin-bottom':'100px'}}>    
<div className="dashboard-nav">
        <p>Connect</p>
        <p>Prep</p>
        <p>Automate</p>
        <p>Explore</p>
        <p>Visualize</p>
        <p>Collaborate</p>

</div>
<div style={{width:'80%','text-align':'left','padding':'50px'}}>
    <img src={decisionBoard} style={{width:'100%','max-width':'600px'}}/>
    <div className="heading-text-h3" style={{"margin-bottom":"20px"}}>Empower everyone to make data-driven decisions</div>
    <div className="para-text-h3">Lorem Ipsum is simply dummy text of the printing <br/>and  typesetting industry. Lorem Ipsum has been <br/> the industry's standard dummy text ever since the 1500</div>

</div>


</div>
</>

            
    );


}
export default Dashboard;