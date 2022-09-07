import React from "react";
import './Governance.css';
import "@fontsource/red-hat-display";
import './../min.css';
import Group6 from './resources/Group6.png';
import Group5 from './resources/Group5.png';
import Group7 from './resources/Group7.png';
import Group8 from './resources/Group8.png';
import Group10 from './resources/Group10.png';
import Group9 from './resources/Group9.png';

import explorArrow from './resources/explore-arrow.svg';

function Security(){
    return(
<div className="works-governance">    
<div className="heading-text-h2" style={{'padding-bottom':'20px','text-align':'left','font-size':'45px'}}>A Single Source of Truth</div>
<div className="row" style={{width:'80%'}}>
    <div className="row" style={{width:'25%'}}>
        <div className="box box-md-1">
            <div className="color-box-shade">
                <img src={Group6}/>
                <div>
                <p className="heading-text-h2" style={{'text-align':'left','font-size':'25px'}}>Devop<br/>Governance</p>
                <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
                <div style={{display:'flex','flex-direction':'column'}}><arrow> Explore</arrow><img src={explorArrow}/> </div>
                </div>
            </div>
            
        </div>
    </div>
    <div style={{width:'75%'}}>
    <div className="row" style={{width:'100%'}}>
        
    <div className="box box-md-3">
            <div className="color-box-shade">
                <img src={Group5}/>
                
                    <p className="heading-text-h2" style={{'text-align':'left','font-size':'25px'}}>Devop<br/>Governance</p>
                    <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
                    <div style={{display:'flex','flex-direction':'column'}}><arrow> Explore</arrow><img src={explorArrow}/> </div>
            </div>
            
        </div>        
        <div className="box box-md-3">
            <div className="color-box-shade">
                <img src={Group7}/>
                
                    <p className="heading-text-h2" style={{'text-align':'left','font-size':'25px'}}>Devop<br/>Governance</p>
                    <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
                    <div style={{display:'flex','flex-direction':'column'}}><arrow> Explore</arrow><img src={explorArrow}/> </div>
            </div>
            
        </div>          
        <div className="box box-md-3">
            <div className="color-box-shade">
                <img src={Group8}/>
                
                    <p className="heading-text-h2" style={{'text-align':'left','font-size':'25px'}}>Devop<br/>Governance</p>
                    <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
                    <div style={{display:'flex','flex-direction':'column'}}><arrow> Explore</arrow><img src={explorArrow}/> </div>
            </div>
            
        </div>      </div>
    <div className="row" style={{width:'100%'}}>
        
    <div className="box box-md-4">
            <div className="color-box-shade">
                <img src={Group9}/>
                
                    <p className="heading-text-h2" style={{'text-align':'left','font-size':'25px'}}>Devop<br/>Governance</p>
                    <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
                    <div style={{display:'flex','flex-direction':'column'}}><arrow> Explore</arrow><img src={explorArrow}/> </div>
            </div>
            
        </div>          
        <div className="box box-md-4">
            <div className="color-box-shade">
                <img src={Group10}/>
                
                    <p className="heading-text-h2" style={{'text-align':'left','font-size':'25px'}}>Devop<br/>Governance</p>
                    <p className="para-text-h3">Join the Thousands of Business Leaders Winning With Grow</p>
                    <div style={{display:'flex','flex-direction':'column'}}><arrow> Explore</arrow><img src={explorArrow}/> </div>
            </div>
            
        </div>  
    </div>
    </div>
    </div>
<div className="works-background"></div>

</div>
    );


}
export default Security;