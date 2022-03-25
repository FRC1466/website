import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import DynamicHeader from './js/dynamic-header';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

DynamicHeader();

var stickyScript = document.createElement('script');
stickyScript.innerHTML = `
window.onscroll = function() {myFunction()};

var navbar = document.getElementsByTagName("nav");
var sticky = navbar.offsetTop;

func myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  console.log('test');
} 
`;
document.getElementsByTagName('head')[0].appendChild(stickyScript);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

