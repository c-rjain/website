import React from "react";
import './LandingPage.css';
import "@fontsource/red-hat-display";
import logo from './resources/logo.gif';
import governanceIcon from './resources/governance.svg';
import prototypeIcon from './resources/prototype.svg';
import contentIcon from './resources/content.svg';
import augmentedTeamIcon from './resources/augmented_team.svg';
import articleIcon from './resources/article.svg';
import './../min.css';
import downArrow from './resources/downArrow.svg'
function OurService(){
    return(
        <div className="body-service">
            <h3 className="our-service-text">Our Service</h3>
            <div className="row">
                <div className="box white-background text-center"><img src={governanceIcon} style={{width:'100%'}}/><p className="service-specific-text">Governance</p><img src={downArrow} style={{width:'30px'}}/></div>
                <div className="box white-background text-center"><img src={prototypeIcon} style={{width:'100%'}}/><p className="service-specific-text">UI/UX Prototype</p><img src={downArrow} style={{width:'30px'}}/></div>
                <div className="box white-background text-center"><img src={contentIcon} style={{width:'100%'}}/><p className="service-specific-text">Content</p><img src={downArrow} style={{width:'30px'}}/></div>
                <div className="box white-background text-center"><img src={augmentedTeamIcon} style={{width:'100%'}}/><p className="service-specific-text">Augmented Team</p><img src={downArrow} style={{width:'30px'}}/></div>
                <div className="box white-background text-center"><img src={articleIcon} style={{width:'100%'}}/><p className="service-specific-text">Article</p><img src={downArrow} style={{width:'30px'}}/></div>
 
            </div>
        </div>

    );
}
export default OurService;