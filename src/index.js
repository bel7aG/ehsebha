import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/';
import CustomLinkExample from './playground/router-two/router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CustomLinkExample />, document.getElementById('root'));

serviceWorker.unregister();
