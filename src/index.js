import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello greeting={'Hello' + 'Reaact Ninja'} />, document.getElementById('root'));
registerServiceWorker();
