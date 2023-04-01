import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import p from '../assets/o.svg';
import ps from '../assets/favicon.ico';
import './Stepinto.css';

export const Stepinto = () => {
  return (
   <div className='classStepinto'>
    <div className='parrafoInicial'>
      <div id='stepinto'>
        Step into a realm of endless<br/> possibilities.
      </div>
      <p id='explore'>
      Explore, discover, and collaborate on <br/>cutting-edge internet media products<br/> and services, with freedom and<br/> expression at the core of everything<br/> we do
      </p>
    </div>
    <div id='classDare'>
      <div id="dare">Dare to be different with us.</div>
    </div>
   </div>
  );
};