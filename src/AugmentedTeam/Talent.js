import React from "react";
import './AugmentedTeam.css';
import "@fontsource/red-hat-display";
import './../min.css';
import "@fontsource/inter";
import augmented_bg from './resources/augmented_bg.svg'
import developers from './resources/developers.svg';
function Talent(){
    return(
        <div className="body-talent">
        <h1>Leverage World-Class Talent</h1>
        <p>Let us streamline your organization’s adoption of DevOps practices.<br/>We’ll provide a complete turnkey Devops solution your team can run <br/>with well into the future.</p>
        <div className="row" style={{width:'100%'}}>
        
        <div className="box box-md-3" style={{"box-shadow":"none","border-radius":"none"}}>
                <div className="WhatIsGreat-box-inline">
                    <img src={developers}/>
                    <div>
                        <h4>Developers</h4>

                        <p>Seasoned software engineers, coders, and architect with expertise across hundreds of technologies.</p>
                        <arrow> Explore</arrow>

                    </div>
                </div>

                       
                
                
            </div>        
            <div className="box box-md-3" style={{"box-shadow":"none","border-radius":"none"}}>
            <div className="WhatIsGreat-box-inline">
                    <img src={developers}/>
                    <div>
                        <h4>Developers</h4>

                        <p>Seasoned software engineers, coders, and architect with expertise across hundreds of technologies.</p>
                        <arrow> Explore</arrow>

                    </div>
                </div>
            </div>          
            <div className="box box-md-3" style={{"box-shadow":"none","border-radius":"none"}}>
            <div className="WhatIsGreat-box-inline">
                    <img src={developers}/>
                    <div>
                        <h4>Developers</h4>

                        <p>Seasoned software engineers, coders, and architect with expertise across hundreds of technologies.</p>
                        <arrow> Explore</arrow>

                    </div>
                </div>
                
            </div>      
            </div>
            <div className="row" style={{width:'100%'}}>
        
        <div className="box box-md-3" style={{"box-shadow":"none","border-radius":"none"}}>
                <div className="WhatIsGreat-box-inline">
                    <img src={developers}/>
                    <div>
                        <h4>Developers</h4>

                        <p>Seasoned software engineers, coders, and architect with expertise across hundreds of technologies.</p>
                        <arrow> Explore</arrow>

                    </div>
                </div>

                       
                
                
            </div>        
            <div className="box box-md-3" style={{"box-shadow":"none","border-radius":"none"}}>
            <div className="WhatIsGreat-box-inline">
                    <img src={developers}/>
                    <div>
                        <h4>Developers</h4>

                        <p>Seasoned software engineers, coders, and architect with expertise across hundreds of technologies.</p>
                        <arrow> Explore</arrow>

                    </div>
                </div>
            </div>          
            <div className="box box-md-3" style={{"box-shadow":"none","border-radius":"none"}}>
            <div className="WhatIsGreat-box-inline">
                    <img src={developers}/>
                    <div>
                        <h4>Developers</h4>

                        <p>Seasoned software engineers, coders, and architect with expertise across hundreds of technologies.</p>
                        <arrow> Explore</arrow>

                    </div>
                </div>
                
            </div>      
            </div>
            </div>
    );


}
export default Talent;