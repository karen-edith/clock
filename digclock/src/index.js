import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enter from './Enter';
import Supper from './Supper';
import Homework from './Homework';
import Literature from './Literature';
import Outdoor from './Outdoor';
import Enrichment from './Enrichment';
import Meetings from './Meetings';
import Cleanup from './Cleanup';
import ThisWeek from './ThisWeek';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/EnterRoom' component={Enter}/>
        <Route path='/Supper' component={Supper}/>
        <Route path='/Homework' component={Homework}/>
        <Route path='/Literature' component={Literature}/>
        <Route path='/OutdoorTime' component={Outdoor}/>
        <Route path='/Enrichment' component={Enrichment}/>
        <Route path='/Cleanup' component={Cleanup}/>
        <Route path='/IndividualMeetings' component={Meetings}/>
        <Route path='/ThisWeek' component={ThisWeek}/>
      </div>
    </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
