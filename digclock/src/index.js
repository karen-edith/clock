import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enter from './Enter'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/enter' component={Enter}/>
      </div>
    </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
