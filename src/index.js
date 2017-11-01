import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


import './index.css';
import Bg from './components/img/bgweb.png'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <span>
            <img src={Bg} className="bg"/>
            <App />
        </span>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
