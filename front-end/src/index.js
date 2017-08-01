import React from 'react';
import ReactDOM from 'react-dom';
import router from 'react-router-dom'
import './index.css';
import App from './Baselayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
