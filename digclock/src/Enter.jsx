import React, { Component } from 'react';
import './Enter.css';
import { Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Enter extends Component {

  render(){
    return(
      <div className = 'overallContainer'>
        <div className = 'expectations'>
          <div className = 'expectationsTitle'> Entering Room Expectations </div>
          <div className = 'rule'><div className = 'handglyph'><Glyphicon glyph = 'hand-right'/></div> <div className ='rle'>Line up outside in a straight line - track forward with voice at a level 1 </div></div>
          <div className = 'rule'><div className = 'handglyph'><Glyphicon glyph = 'hand-right'/></div> <div className ='rle'>Take out homework, book, or grab art/crafts supplies from bin </div></div>
          <div className = 'rule'><div className = 'handglyph'><Glyphicon glyph = 'hand-right'/></div> <div className ='rle'>Put Backpack away on Rack </div></div>
          <div className = 'rule'><div className = 'handglyph'><Glyphicon glyph = 'hand-right'/></div> <div className ='rle'>Have a seat and work on selected option and keep voice at a level 1 </div></div>
          <div className = 'rule'><div className = 'handglyph'><Glyphicon glyph = 'hand-right'/></div> <div className ='rle'>For announcements, track Ms. Garcia when she requests your attention with an attention getter </div></div>
          <div className = 'rule'><div className = 'handglyph'><Glyphicon glyph = 'hand-right'/></div> <div className ='rle'>Once You're done with your Job, Let Ms. Garcia know and have a seat </div></div>
          <div className = 'rule'><div className = 'handglyph'><Glyphicon glyph = 'hand-right'/></div> <div className ='rle'>Everyon one else should have a seat </div></div>
          <div className ='navigation'>
            <div> <Button className = 'backtobtn'> <Link to='/' className='removelinkdec'> Clock and Schedule </Link> </Button> </div>
            <div><Button className='todaysactivities'> Today's Activities </Button></div>
          </div>
        </div>
        <div className = 'jobs'>
          <div className = 'jobsTitle'> Block Student Jobs </div>
          <div className = 'jobrow'>
            <div className ='titl'> <div className = 'jtitle1'> Line Leader </div> <div className='jtitle2'> Attendance Assistant</div></div>
            <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Nellie</div> </div>
            <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Jeihser </div> </div>
          </div>

          <div className = 'jobrow'>
            <div className ='titl'> <div className = 'jtitle1'> Sign-in Manager </div> <div className='jtitle2'> Laptop Setup Assistant </div></div>
            <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Joshua </div> </div>
            <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Alyssa </div> </div>
          </div>

          <div className = 'jobrow'>
            <div className ='titl'> <div className = 'jtitle'> Backpack Managers </div> </div>
            <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Reizo </div> </div>
            <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Dominic </div> </div>
          </div>

          <div className = 'jobrow nobottomborder'>
            <div className ='titl'> <div className = 'jtitle1'> Projector Assitant </div> <div className='jtitle2'> Timer Assistant </div></div>
            <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Julio </div> </div>
            <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> Allison </div> </div>
          </div>

        </div>
      </div>
    )

  }
}

export default Enter
