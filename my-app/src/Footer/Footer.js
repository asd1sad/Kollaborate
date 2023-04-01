import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import p from '../assets/o.svg';
import ps from '../assets/favicon.ico';
import './Footer.css';

export const Footer = () => {
  return (
   <div>
      <div className='container'>
        <div>
          <img src="./imgs/logo.svg"/>
        </div>
        <div className='joinConBtn'>
          <div id='join'>Join the <br/><i>kollaborators</i> in <br/>the metaverse...</div>
          <div id='joinIphone'>Join the <i>kollaborators</i><br/> in the metaverse...</div>
          <div id="btnBecome">
            <button id="btnBecomeAKollaborator">Become a Kollaborator</button>
          </div>
        </div>
      </div>
      <div className='anchoPagina'>
        <ul className='footerContainer'>
          <a>
            <li>Contact</li>
          </a>
          <a>
            <li>Disclaimer</li>
          </a>
          <a>
            <li>Privacy Policy</li>
          </a>
          <a>
           <li>Terms of use</li>
          </a>
        </ul>
      </div>
    </div>
  );
};