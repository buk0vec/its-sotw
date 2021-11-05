import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

const firebaseConfig = {
  apiKey: "AIzaSyBR4ffTliGSgLXu8nr515vQl9mF7WjoWG4",
  authDomain: "itsdashboard.firebaseapp.com",
  projectId: "itsdashboard",
  storageBucket: "itsdashboard.appspot.com",
  messagingSenderId: "461250762900",
  appId: "1:461250762900:web:e5e9bcdc0f648bdfee7c81"

};



const fbapp = initializeApp(firebaseConfig)

const appCheck = initializeAppCheck(fbapp, {
  provider: new ReCaptchaV3Provider("6LdSmRUdAAAAAGQrxCOiEsmZVe65znEmKEwLOOES"),
  isTokenAutoRefreshEnabled: true
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
