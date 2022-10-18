import React from "react";
import './AugmentedTeam.css';
import "@fontsource/red-hat-display";
import Display from "./Display";
import WhatIsGreat from './WhatIsGreat';
import Talent from './Talent';
import AmazingTeams from './AmazingTeams';
function AugmentedTeam(){
    return(
        <div>
        <Display/>
        <WhatIsGreat/>
        <Talent/>
        <AmazingTeams/>
        </div>
    );


}
export default AugmentedTeam;