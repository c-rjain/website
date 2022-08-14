import React,{useState,useEffect,useRef,useCallback} from "react";
import './css/fourthDisplay.css';
import "@fontsource/red-hat-display";
import bgPrototype from './resources/bg-prototype.svg';
import explorArrow from './resources/explore-arrow.svg';
import protoTypeStackConnect1 from './resources/prototype-stack-connect1.svg';
import protoTypeStackConnect2 from './resources/prototype-stack-connect2.svg';

function FourthDisplay(){

    return (
    <div className="fourthDisplay">
        <img src={bgPrototype} className="backgroundImage-prototype"/>
        <div className="prototype">
            <p>Build Your   <br/><prototype style={{color:'#35BBEA'}}>'Prototype'</prototype></p>
            
            <div className="prototype-flex">                
            <img src={protoTypeStackConnect1} style={{position:'absolute', top:'300px',left:'270px',width:'250px',height:'300px','z-index':'0.01'}}/>

                <div className="prototype-stack" style={{ top:'50px',left:'0px' }}>
                    <div className="color-tag" style={{'background-color':'#1B8036'}}>
                    </div>
                        <h3>Test 1</h3>
                        <p>Our dream is make every digital dream come true</p>
                        <br/>
                        <img src={explorArrow}/> <arrow> Explore</arrow>
                </div>            
                <img src={protoTypeStackConnect1} style={{position:'absolute', top:'450px',left:'570px',width:'200px',height:'300px','z-index':'0.01'}}/>

                <div className="prototype-stack" style={{ top:'-50px',left:'300px' }}>
                <div className="color-tag" style={{'background-color':'#FFE600'}}></div>
                <h3>Test 2</h3>
                <p>Our dream is make every digital dream come true</p>
                    <br/>
                    <img src={explorArrow}/> <arrow> Explore</arrow>
                    </div>
                    <img src={protoTypeStackConnect2} style={{position:'absolute', top:'750px',left:'550px',width:'121px',height:'212px','z-index':'0.01'}}/>

                <div className="prototype-stack" style={{ top:'-130px',left:'550px' }}>
                <div className="color-tag" style={{'background-color':'#FF0000'}}></div>
                    <h3>Test 3</h3>
                    <p>Our dream is make every digital dream come true</p>
                    <br/>
                    <img src={explorArrow}/> <arrow> Explore</arrow>
                </div>



                    <div className="prototype-stack" style={{ top:'-200px',left:'300px' }}>
                    <div className="color-tag" style={{'background-color':'#3A66FF'}}></div>
                    <h3>Test 4</h3>
                    <p>Our dream is make every digital dream come true</p>
                    <br/>
                    <img src={explorArrow}/> <arrow> Explore</arrow>
                    </div>
                    <div className="prototype-stack" style={{ top:'-300px',left:'0px' }}>
                    <div className="color-tag" style={{'background-color':'#F800FD'}}></div>
                    <h3>Test 5</h3>
                    <p>Our dream is make every digital dream come true</p>
                    <br/>
                    <img src={explorArrow}/> <arrow> Explore</arrow>
                </div>

                
        </div>
        </div>
    </div>);
}
export default FourthDisplay;
