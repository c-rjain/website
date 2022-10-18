import React from "react";
import './Prototyping.css';
import "@fontsource/red-hat-display";

import ui_ux_design from './resources/ui-ux-design.svg';
import ux_audit from './resources/ux-audit.svg';

import './../min.css';
function OurService(){
    return(
        <div className="body-prototype-service">
            <h3 className="our-service-text" style={{'text-align':'center'}}>Our Service</h3>
            <div className="row-box">
                <div className="box-prototyping"><img src={ui_ux_design} style={{width:'75px'}}/><p className="service-specific-text-prototyping">UI & UX Design</p></div>
                <div className="box-prototyping"><img src={ux_audit} style={{width:'75px'}}/><p className="service-specific-text-prototypingt">UX Audit</p></div>
                <div className="box-prototyping"><img src={ui_ux_design} style={{width:'75px'}}/><p className="service-specific-text-prototyping">Brand Identity Design</p></div>
           </div>
        </div>

    );
}
export default OurService;