import React,{useState,useEffect,useRef,useCallback} from "react";
import './css/sixthDisplay.css';
import "@fontsource/red-hat-display";
import governanceIcon from './resources/governance.svg';
import sampleArticle from './resources/sampleArticle.svg';
import './../min.css'
function SixthDisplay(){

    return (
        <div className="sixthDisplay">
        <h1 className="heading-text-h2">Our Strong</h1>
        <h1 className="heading-text-h2" style={{color:'#128DB8','text-decoration':'underline'}}>Augmented Team</h1>
            <div className="row">
                <div className="box">
                    <img src={governanceIcon} style={{width:'100%'}}/>
                    <h1 className="heading-text-h3">Dilip Yadav</h1>
                    <h3 className="heading-text-h3">Singer</h3>
                    <p className="para-text-h3">Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p> 
                </div>
                <div className="box">
                    <img src={governanceIcon} style={{width:'100%'}}/>
                    <h1 className="heading-text-h3">Vikhyat Shetty</h1>
                    <h3 className="heading-text-h3">Cloud Engineer</h3>
                    <p className="para-text-h3">Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p>
                </div>
                <div className="box">
                    <img src={governanceIcon} style={{width:'100%'}}/>
                    <h1 className="heading-text-h3">Vikhyat Shetty</h1>
                    <h3 className="heading-text-h3">Cloud Engineer</h3>
                    <p className="para-text-h3">Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <h1 className="heading-text-h2">Our</h1>
        <h1 className="heading-text-h2" style={{color:'#128DB8','text-decoration':'underline'}}>Articles</h1>
        <div className="row">
                <div className="box" style={{width:'26%','box-shadow':'none','border':'none'}}>
                    <img src={sampleArticle} style={{width:'100%'}}/>
                    <h1>Your Vision & Project</h1>
                    <p>Our vision is to help every digital dream come alive through a better and sustain security </p>
                    <a href="test.html">Read More</a>
                </div>
                <div className="box" style={{width:'26%','box-shadow':'none','border':'none'}}>
                    <img src={sampleArticle} style={{width:'100%'}}/>
                    <h1>Your Vision & Project</h1>
                    <p>Our vision is to help every digital dream come alive through a better and sustain security </p>
                    <a href="test.html">Read More</a>
                </div>
                <div className="box" style={{width:'26%','box-shadow':'none','border':'none',margin:'none'}}>
                    <div>
                    <h1>Your Vision & Project</h1>
                    <p>Our vision is to help every digital dream come alive through a better and sustain security </p>
                    <a href="test.html">Read in 9 minutes</a>
                    </div>


                    <div>
                    <h1>Your Vision & Project</h1>
                    <p>Our vision is to help every digital dream come alive through a better and sustain security </p>
                    <a href="test.html">Read in 9 minutes</a>
                    </div>


                    <div>
                    <h1>Your Vision & Project</h1>
                    <p>Our vision is to help every digital dream come alive through a better and sustain security </p>
                    <a href="test.html">Read in 9 minutes</a>
                    </div>
                </div>
        </div>
        </div>

    );
}
export default SixthDisplay;
