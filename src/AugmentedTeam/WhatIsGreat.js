import React,{useState,useEffect,useRef,useCallback} from "react";
import './AugmentedTeam.css';
import "@fontsource/red-hat-display";
import './../min.css';
import augmented_bg from './resources/augmented_bg.svg'
import post_job from './resources/post-job.svg'
import freelancer from './resources/freelancer.svg'
import need_something from './resources/need-something.svg'
import whats_great from './resources/whats-great.svg'

function WhatIsGreat(){
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
        var x = document.getElementsByClassName("great-slides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        x[slideIndex].className="great-slides fade-in";
        x[slideIndex].style.display = "inline-flex";
        setSlideCount(document.getElementsByClassName("great-slides").length);

      },[slideIndex]);
    return(
        <div className="body-what-is-great">
                <div className="question-slide-pane">
                    <button className="question-button" onClick={()=>showDivs(-1)} >Prev</button>
                    <p>Question {slideIndex+1} of {slideCount}</p>
                    <button className="question-button" onClick={()=>showDivs(1)}>Next</button>
                </div>
<div className="great-slides-div-pane">
                <div id="great-slides">
                    <div className="great-slides">
                    <div className="div-pane">
                    <h1>Need something done?</h1>

                        <div className="WhatIsGreat-box-inline">
                        
                        <div>

                        <div className="WhatIsGreat-box">
                            <img src={post_job}/>
                            <br/>
                            <h3>Post a Job</h3>
                            <br/>
                            <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes </p>
                            <br/>
                        </div>
                        <div className="WhatIsGreat-box">
                            <div className="WhatIsGreat-box-inline"><img src={freelancer}/><h3>Choose<br/>FreeLancers</h3></div>
                            <br/>
                           <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes </p>
                            <br/>
                        </div>
                        </div>
                        <div>
                        <div className="WhatIsGreat-box">
                            <div className="WhatIsGreat-box-inline"><img src={freelancer}/><h3>Choose<br/>FreeLancers</h3></div>
                            <br/>
                           <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes </p>
                            <br/>
                        </div>
                        <div className="WhatIsGreat-box">
                            <img src={post_job}/>
                            <br/>
                            <h3>Post a Job</h3>
                            <br/>
                            <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes </p>
                            <br/>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                    <div className="div-pane">
                    <img src={need_something} style={{"width":"100%"}}/>
                    </div>
                    </div>
                    <div className="great-slides">
                    <div>
                    <h1>What’s great about it?</h1>

                        <div className="WhatIsGreat-box-inline">
                        
                        <div>

                        <div className="WhatIsGreat-box">
                            <img src={post_job}/>
                            <br/>
                            <h3>Post a Job</h3>
                            <br/>
                            <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes </p>
                            <br/>
                        </div>
                        <div className="WhatIsGreat-box">
                            <div className="WhatIsGreat-box-inline"><img src={freelancer}/><h3>Choose<br/>FreeLancers</h3></div>
                            <br/>
                           <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes </p>
                            <br/>
                        </div>
                        </div>
                        <div>
                        <div className="WhatIsGreat-box">
                            <div className="WhatIsGreat-box-inline"><img src={freelancer}/><h3>Choose<br/>FreeLancers</h3></div>
                            <br/>
                           <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes </p>
                            <br/>
                        </div>
                        <div className="WhatIsGreat-box">
                            <img src={post_job} />
                            <br/>
                            <h3>Post a Job</h3>
                            <br/>
                            <p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes </p>
                            <br/>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                    <div>
                    <img src={whats_great} style={{"width":"100%"}}/>
                    </div>
                    </div>
                   

                </div>

            </div>
        </div>
    );


}
export default WhatIsGreat;