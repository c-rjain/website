import React,{useState,useEffect,useRef,useCallback} from "react";
import './css/fifthDisplay.css';
import "@fontsource/red-hat-display";
import bgContentWriting from './resources/content-writing.svg';
import contentWritingBottom from './resources/content-writing-bottom.svg';
function FifthDisplay(){

    return (
       
        <div className="fifthDisplay">
        <div className="fifthDisplaySub">
            <img src={bgContentWriting} className="bgContentWriting"/>
            <div className="bgContentWritingData">
                <div className="bgContentWritingDataText">
                    <h2>Content Writing</h2>
                    <p>Confederacie will provide content writing service. If possible please use a good Ilustration in this section.</p>
                </div>
            </div>
        </div>
        <div className="opacityBox"></div>

        <br/>
        <h1 className="contentWritingHeading">Content Writing</h1>
        <div className="leftRightCircle">
            <div>&lt;</div>
            <div>&gt;</div>
            </div>
            <div className="row">
                <div className="box">
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2 26.5L8.4 15L22.2 3.5L18 0L0 15L18 30L22.2 26.5ZM37.8 26.5L51.6 15L37.8 3.5L42 0L60 15L42 30L37.8 26.5Z"/>
                </svg>
                    <h1>Software Architecture and Development</h1>
                    <p>Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p>
                </div>
                <div className="box">
                <svg width="60" height="30" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 64H8V8H36V0H8C3.56 0 0 3.6 0 8V64C0 68.4 3.56 72 8 72H64C68.4 72 72 68.4 72 64V36H64V64ZM44 0V8H58.36L19.04 47.32L24.68 52.96L64 13.64V28H72V0H44Z"/>
                </svg>

                    <h1>Resilent<br/> Infrastructure</h1>
                    <p>Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p>
                </div>
                <div className="box">
                <svg width="60" height="30" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 64H8V8H36V0H8C3.56 0 0 3.6 0 8V64C0 68.4 3.56 72 8 72H64C68.4 72 72 68.4 72 64V36H64V64ZM44 0V8H58.36L19.04 47.32L24.68 52.96L64 13.64V28H72V0H44Z"/>
                </svg>

                    <h1>Resilent<br/> Infrastructure</h1>
                    <p>Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p>
                </div>
                <div className="box">
                <svg width="60" height="30" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 64H8V8H36V0H8C3.56 0 0 3.6 0 8V64C0 68.4 3.56 72 8 72H64C68.4 72 72 68.4 72 64V36H64V64ZM44 0V8H58.36L19.04 47.32L24.68 52.96L64 13.64V28H72V0H44Z"/>
                </svg>

                    <h1>Resilent<br/> Infrastructure</h1>
                    <p>Our vision is to help every digital dream come alive snv dsljf nv mdsfinI, sdnf II fkdsjfl </p>
                </div>
                

            </div>
        <div className="contentWritingBottomImg">
        <img src={contentWritingBottom}/>
        </div>
    </div>
        

    );
}
export default FifthDisplay;

