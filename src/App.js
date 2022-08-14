import React,{ Component } from "react";
import logo from './logo.svg';
import './App.css';

import LandingPage from "./LandingPage/LandingPage";
import Visualization from './Visualization/Visualization'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (

      
      <BrowserRouter>
    
        <Routes>
          <Route exact path ="/" element={<LandingPage/>} />
          <Route exact path ="/visualization" element={<Visualization/>} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
