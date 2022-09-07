import React from "react";
import './Virtualization.css';
import "@fontsource/red-hat-display";
import './../min.css';
import sourceService from "./resources/source-service.svg";

import azure from "./resources/azure.svg";
import checkmark from "./resources/checkMark.svg"

import firebase from "./resources/firebase.svg"
import kubernetes from "./resources/kubernetes.svg"
import automation from "./resources/automation.svg"

function Services(){
    return(
        <>
        <div className="body-virtualization">
            <div className="div-50">
                <h2>Open Source Services</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className="div-50">
                <img src={sourceService} className="div-50-img"/>
            </div>

        </div>
        <div className="body-virtualization">
            
            <div className="div-50">
                <img src={azure} className="div-50-img"/>
            </div>
            <div className="div-50">
                <h2>Build 5 desktops on cloud for your team for free.</h2>
                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/> We setup your cloud Suscription </div>
                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/>  You only bear the infra cost no service charges</div>

                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/> secure Access </div>
                <br/>
                <div className="vir-button">Button 1</div>
            </div>

        </div>

        <div className="body-virtualization">
            
           
            <div className="div-50">
                <h2>Build 5 desktops on cloud for your team for free.</h2>
                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/> We setup your cloud Suscription </div>
                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/>  You only bear the infra cost no service charges</div>

                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/> secure Access </div>
                <br/>
                <div className="vir-button">Button 1</div>
            </div>
            <div className="div-50">
                <img src={kubernetes} className="div-50-img"/>
            </div>

        </div>

        <div className="body-virtualization">
            
            <div className="div-50">
                <img src={firebase} className="div-50-img"/>
            </div>
            <div className="div-50">
                <h2>Build 5 desktops on cloud for your team for free.</h2>
                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/> We setup your cloud Suscription </div>
                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/>  You only bear the infra cost no service charges</div>

                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/> secure Access </div>
                <br/>
                <div className="vir-button">Button 1</div>
            </div>
            

        </div>
        <div className="body-virtualization">
            
           
            <div className="div-50">
                <h2>Build 5 desktops on cloud for your team for free.</h2>
                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/> We setup your cloud Suscription </div>
                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/>  You only bear the infra cost no service charges</div>

                <div className="checkMarkDiv"><img src={checkmark} width="15" height="15"/> secure Access </div>
                <br/>
                <div className="vir-button">Button 1</div>
            </div>
            <div className="div-50">
                <img src={automation} className="div-50-img"/>
            </div>

        </div>
        </>
    );


}
export default Services;