import React from "react";
import { useState } from "react"
import './bottomNavigation.css';
import "@fontsource/red-hat-display";
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import { Link } from "react-router-dom";
import './min.css'
function BottomNavigation(){

    return(
        <div className="bottomNav">
            <div className="row">
                <div className="box box-nav box-md-4"><div style={{'display':'flex','flex-direction':'row'}}><img src={logo} style={{width:'100%'}} /><p className="service-specific-text">Governance</p></div><p>Our vision is to help every digital dream come alive through a better and sustain security</p></div>
                <div className="box box-nav box-md-4">
                    <h3  className="heading-text-h3" style={{'text-align':'left'}}>Products</h3>
                    <Link className="box-nav-link" to="test.html"><p>Product 1</p></Link>
                    <Link className="box-nav-link" to="test.html"><p>Product 2</p></Link>
                    <Link className="box-nav-link" to="test.html"><p>Product 3</p></Link>
                    <Link className="box-nav-link" to="test.html"><p>Product 4</p></Link>

                </div>
                <div className="box box-nav box-md-4">
                    <h3  className="heading-text-h3" style={{'text-align':'left'}}>Products</h3>
                    <Link className="box-nav-link" to="test.html"><p>Product 1</p></Link>
                    <Link className="box-nav-link" to="test.html"><p>Product 2</p></Link>
                    <Link className="box-nav-link" to="test.html"><p>Product 3</p></Link>
                    <Link className="box-nav-link" to="test.html"><p>Product 4</p></Link>

                </div>
                <div className="box box-nav box-md-4">
                    <h3  className="heading-text-h3" style={{'text-align':'left'}}>Products</h3>
                    <Link className="box-nav-link" to="test.html"><p>Product 1</p></Link>
                    <Link className="box-nav-link" to="test.html"><p>Product 2</p></Link>
                    <Link className="box-nav-link" to="test.html"><p>Product 3</p></Link>
                    <Link className="box-nav-link" to="test.html"><p>Product 4</p></Link>

                </div>
            </div>
            <div style={{'width':'100%'}}>
                <div stye={{'width':'50%','position':'relative','left':'0px'}}>© 2022 Confederacie. All Rights Reserved.</div>

            </div>
        </div>
    );
}
/* Confederacie. */




export default BottomNavigation;