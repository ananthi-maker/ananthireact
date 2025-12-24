import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
var subj={
    rno:1001,
    sname:"ananthi",
    mark:[90,80],
    rank:1,
    grade:"excellent",
    location:"karur",
    issingle:"true",
    aadhar:"512915829087",
    phone:"9597151530",
    height:"175cm",
    hobbies:{
        hob1:"dancing",
        hob2:"reading books",
        hob3:"singing"
    }
}

    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={subj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
