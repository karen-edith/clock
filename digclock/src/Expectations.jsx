import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom'
class Expectations extends Component {

  render() {
    return (
        <div className = 'overallContainer'>
          <div className = 'expectations'>
            <div className = 'expectationsTitle'> {this.props.expTitle} </div>
            {
              this.props.expectations.map((item, index) => {
                return (
                  <div key = {index} className = 'rule'>
                    <div className = 'handglyph'> <Glyphicon glyph = 'hand-right'/> </div>
                    <div className ='rle'> {item} </div>
                  </div>
                )
              })
            }
            <div className ='navigation'>
              <div> <Button className = 'backtobtn'> <Link to='/' className='removelinkdec'> Clock and Schedule </Link> </Button> </div>
              <div><Button className='todaysactivities'> Today's Activities </Button></div>
            </div>
          </div>
          <div className = 'jobs'>
            <div className = 'jobsTitle'> Block Scholar Jobs </div>
            {
              this.props.roles1.map((item, index) => {
                  if(index < this.props.roles2.length-1){
                    return (
                      <div className = 'jobrow'>
                        <div className ='titl'> <div className = 'jtitle1'> {item} </div> <div className='jtitle2'> {this.props.roles2[index]}</div></div>
                        <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> {this.props.studentNames1[index]}</div> </div>
                        <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> {this.props.studentNames2[index]} </div> </div>
                      </div>
                    )
                  } else {
                    return (
                      <div className = 'jobrow nobottomborder'>
                        <div className ='titl'> <div className = 'jtitle1'> {item} </div> <div className='jtitle2'> {this.props.roles2[index]}</div></div>
                        <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> {this.props.studentNames1[index]}</div> </div>
                        <div className ='studentImage'> <img className = 'image' src = {require('./sbob.jpg')} alt =''/> <div className ='studentName'> {this.props.studentNames2[index]} </div> </div>
                      </div>
                    )
                  }
              })
            }
          </div>
        </div>
    )
  }
}

export default Expectations;
