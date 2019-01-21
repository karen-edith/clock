import React, { Component } from 'react';
import './Enter.css';
import { Button } from 'react-bootstrap';

class Enter extends Component {

  render(){
    return(
      <div className = 'overallContainer'>
        <div className = 'expectations'>
          <h4> Entering Room Expectations </h4>
          <div className = 'rule'> Line up outside in a straight line - track forward with voice at a level 1 </div>
          <div className = 'rule'> Take out homework, book, or grab art/crafts supplies from bin </div>
          <div className = 'rule'> Put Backpack away on Rack </div>
          <div className = 'rule'> Have a seat and work on selected option and keep voice at a level 1 </div>
          <div className = 'rule'> For announcements, track Ms. Garcia when she requests your attention with an attention getter </div>
          <div className = 'rule'> Once You're done with your Job, Let Ms. Garcia know and have a seat </div>
          <div className = 'rule'> Everyon one else should have a seat </div>
          <div>
            <Button> Back to </Button>
            <Button> Today's Activities </Button>
          </div>
        </div>
        <div className = 'jobs'>
          <h4> Student Jobs</h4>
          <div className = 'jobrow'>
            <div className ='titl'> <div className = 'jtitle1'> Line Leader </div> <div className='jtitle2'> Attendance Assistant</div></div>
            <div className ='studentImage'> <img className = 'image redborder' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Nellie</div> </div>
            <div className ='studentImage'> <img className = 'image redborder' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Jeihser </div> </div>
          </div>

          <div className = 'jobrow'>
            <div className ='title'> <div className = 'jtitle1'> Sign-in Manager </div> <div className='jtitle2'> Laptop Setup Assistant </div></div>
            <div className ='studentImage'> <img className = 'image greenborder' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Joshua </div> </div>
            <div className ='studentImage'> <img className = 'image greenborder' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Alyssa </div> </div>
          </div>

          <div className = 'jobrow'>
            <div className ='title'> <div className = 'jtitle'> Backpack Managers </div> </div>
            <div className ='studentImage'> <img className = 'image blueborder' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Reizo </div> </div>
            <div className ='studentImage'> <img className = 'image blueborder' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Dominic </div> </div>
          </div>

          <div className = 'jobrow'>
            <div className ='title'> <div className = 'jtitle1'> Projector Assitant </div> <div className='jtitle2'> Timer Assistant </div></div>
            <div className ='studentImage'> <img className = 'image redborder' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Julio </div> </div>
            <div className ='studentImage'> <img className = 'image redborder' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Allison </div> </div>
          </div>

        </div>
      </div>
    )

  }
}

export default Enter
