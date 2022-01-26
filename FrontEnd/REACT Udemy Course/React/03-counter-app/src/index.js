import React from 'react';
import ReactDOM  from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');
const saludo = <h1>Hola Mundo</h1>;
ReactDOM.render(<CounterApp value={123}/>,divRoot);
