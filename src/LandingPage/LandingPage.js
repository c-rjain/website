import React from "react";
import "@fontsource/red-hat-display";
import Display from "./Display";

import OurService from './OurService';
import ThirdDisplay from './thirdDisplay'
import FourthDisplay from './fourthDisplay';
import FifthDisplay from './fifthDisplay';
import SixthDisplay from './sixthDisplay';

function LandingPage(){
    return(
        <div>
        <Display/>
        <OurService/>
        <ThirdDisplay/>
        <FourthDisplay/>
        <FifthDisplay/>
        <SixthDisplay/>
        </div>
    );


}
export default LandingPage;