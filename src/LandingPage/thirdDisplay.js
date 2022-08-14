import React,{useState,useEffect,useRef,useCallback} from "react";
import './LandingPage.css';
import "@fontsource/red-hat-display";
import governanceIcon from './resources/governance-icon.svg';
import securityIcon from './resources/security-icon.svg';
import virtualizationIcon from './resources/virtualization.svg';
import networkIcon from './resources/network.svg';
import cloudIcon from './resources/cloud.svg';
import dataIcon from './resources/data.svg';
import logo from './../logo.svg';

import linkArrowIcon from './resources/link-arrow.svg'
import downArrow from './resources/downArrow.svg'
function ThirdDisplay(){
    const [slideIndex, setSlideIndex] = useState(0);
    const [slideCount,setSlideCount]=useState(0);
    const [prevScreen,setPrevScreen]=useState(2);
    const stateRef = useRef();  
    stateRef.current=slideIndex;
    const showDivs=(n)=>{
        if (slideIndex+n >= slideCount) {
            setSlideIndex(0);
            
        }    
        else if (slideIndex+n < 0) {
            setSlideIndex(slideCount-1);
        }
        else{
            setSlideIndex(slideIndex+n);
        }
        
       
         
      }

      useEffect(()=>{
        var i;   
        var x = document.getElementsByClassName("question-slides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        x[slideIndex].className="question-slides fade-in";
        x[slideIndex].style.display = "block";
        setSlideCount(document.getElementsByClassName("question-slides").length);

      },[slideIndex]);
      
    return(
        
        <div className="body-service-stack">


            <div className="div-pane">
                <img src={logo} style={{width:'25px'}}/>
                <div id="slides">
                    <div className="question-slides">
                        <h1>Our Service Stack 1</h1>
                        <h1 style={{color:'#35BBEA'}}>Text here</h1>
                        <h1 style={{color:'#35BBEA'}}>Our Service Stack</h1>
                        <p>Our dream is to make every digital dream come true</p>
                        <p>Our dream is to make every digital dream come true</p>

                    </div>
                    <div className="question-slides">
                        <h1>Our Service Stack 2</h1>
                        <h1 style={{color:'#35BBEA'}}>Text here</h1>
                        <h1 style={{color:'#35BBEA'}}>Our Service Stack</h1>
                        <p>Our dream is to make every digital dream come true</p>
                    </div>
                    <div className="question-slides">
                        <h1>Our Service Stack 3</h1>
                        <h1 style={{color:'#35BBEA'}}>Text here</h1>
                        <h1 style={{color:'#35BBEA'}}>Our Service Stack</h1>
                        <p>Our dream is to make every digital dream come true</p>
                    </div>

                </div>
                <div className="question-slide-pane">
                    <button className="question-button" onClick={()=>showDivs(-1)} >Prev</button>
                    <p>Question {slideIndex+1} of {slideCount}</p>
                    <button className="question-button" onClick={()=>showDivs(1)}>Next</button>
                </div>
            </div>
            <div className="div-pane">
                <div className="service-stack-row ">
                    <div className="service-stack service-stack-first-row-first-col">
                        <div className="service-icon"/>
                        <h3>Governance</h3>
                        <p>Our Dream is to make every digital dream come alive</p>
                        <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48 24C48 36.6832 37.4982 47 24.5 47C11.5018 47 1 36.6832 1 24C1 11.3168 11.5018 1 24.5 1C37.4982 1 48 11.3168 48 24Z" stroke-width="2"/>
                        <path className="circle" d="M34.8525 14.8072C34.839 14.2551 34.3805 13.8184 33.8284 13.8319L24.8311 14.0514C24.279 14.0648 23.8423 14.5233 23.8558 15.0754C23.8692 15.6276 24.3277 16.0642 24.8799 16.0508L32.8775 15.8557L33.0725 23.8533C33.086 24.4054 33.5445 24.8421 34.0966 24.8286C34.6487 24.8152 35.0854 24.3567 35.0719 23.8046L34.8525 14.8072ZM15.2085 35.8581L34.5769 15.5213L33.1287 14.142L13.7602 34.4788L15.2085 35.8581Z"/>
                        </svg>
                    </div>
                    <div className="service-stack service-stack-first-row-second-col">
                        <img src={securityIcon} style={{color:'#fff'}}/>
                        <h3>Security</h3>
                        <p>Our Dream is to make every digital dream come alive with better and sustain tech</p>

                    </div>
                </div>
                <div className="service-stack-row ">
                    <div className="service-stack">
                        <img src={virtualizationIcon} style={{color:'#fff'}}/>
                        <h3>Virtualization</h3>
                        <p>Our Dream is to make every digital dream come alive with better and sustain tech</p>

                    </div>
                    <div className="service-stack">
                    <img src={networkIcon} style={{color:'#fff'}}/>
                        <h3>Network</h3>
                        <p>Our Dream is to make every digital dream come alive with better and sustain tech</p>

                    </div>
                </div>
                <div className="service-stack-row ">
                    <div className="service-stack service-stack-third-row-first-col">
                        <img src={cloudIcon} style={{color:'#fff'}}/>
                        <h3>Cloud Services</h3>
                        <p>Our Dream is to make every digital dream come alive with better and sustain tech</p>

                    </div>
                    <div className="service-stack service-stack-third-row-second-col">
                    <img src={dataIcon} style={{color:'#fff'}}/>
                        <h3>Data</h3>
                        <p>Our Dream is to make every digital dream come alive with better and sustain tech</p>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default ThirdDisplay;