import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import DynamicHeader from './js/dynamic-header';


var loadScript = function(src) {
  var tag = document.createElement('script');
  tag.async = false;
  tag.src = src;
  document.getElementsByClassName('App')[0].prepend(tag);
}



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

DynamicHeader();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

