import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const about = document.getElementsByClassName('.about');
const project = document.getElementsByClassName('.project');
const activeProject = document.getElementsByClassName('');

reportWebVitals();
