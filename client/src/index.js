import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />;
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />;
<link rel="preconnect" href="https://fonts.gstatic.com" /> ;
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />;


ReactDOM.render(
  <Provider store={store} >
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
