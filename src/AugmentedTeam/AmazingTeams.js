import React from "react";
import './AugmentedTeam.css';
import "@fontsource/red-hat-display";
import './../min.css';
import "@fontsource/inter";
import augmented_bg from './resources/augmented_bg.svg'
import developers from './resources/developers.svg';
import amazing_teams from './resources/amazing-teams.svg';

function AmazingTeams(){
    return(
        <div className="body-amazing-team">
         <div className="div-pane">
            <img src={amazing_teams} style={{"width":"100%"}}/>
         </div>
        <div className="div-pane">
        <h2 className="inter-heading">Build Amazing Teams, On Demand</h2>
        <p>Quickly assemble the teams you need, exactly when you need them</p>
        <div className="row" style={{width:'100%'}}>
        
        <div className="box box-md-2" style={{"box-shadow":"none","border-radius":"none"}}>
                    <img src={developers}/>
                    <div>
                        <h4>Developers</h4>

                        <p>Seasoned software engineers, coders, and architect with expertise across hundreds of technologies.</p>
                        <arrow> Explore</arrow>

                    </div>

                       
                
                
            </div>        
            <div className="box box-md-2" style={{"box-shadow":"none","border-radius":"none"}}>
                    <img src={developers}/>
                    <div>
                        <h4>Developers</h4>

                        <p>Seasoned software engineers, coders, and architect with expertise across hundreds of technologies.</p>
                        <arrow> Explore</arrow>

                    </div>
                </div>

          
            </div>
            <div className="row" style={{width:'100%'}}>
        
        <div className="box box-md-2" style={{"box-shadow":"none","border-radius":"none"}}>
                    <img src={developers}/>
                    <div>
                        <h4>Developers</h4>

                        <p>Seasoned software engineers, coders, and architect with expertise across hundreds of technologies.</p>
                        <arrow> Explore</arrow>

                    </div>

                       
                
                
            </div>        
            <div className="box box-md-2" style={{"box-shadow":"none","border-radius":"none"}}>
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
export default AmazingTeams;