import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

const someObj = {
  name:'Dmitriy',
  text: 'Это тестовое сообщение'
};

ReactDOM.render(
  <React.StrictMode>
    <App obj={someObj} />
  </React.StrictMode>,
  document.getElementById("root")
);

