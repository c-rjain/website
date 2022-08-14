import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './Navigation';
import BottomNavigation from './bottomNavigation';

import LandingPage from "./LandingPage/LandingPage";
import Visualization from './Visualization/Visualization'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
      <Navigation/>
      <Routes>
          <Route exact path ="/" element={<LandingPage/>} />
          <Route exact path ="/visualization" element={<Visualization/>} />
        </Routes>
        <BottomNavigation/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
