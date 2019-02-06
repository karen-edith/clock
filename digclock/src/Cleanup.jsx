import React, { Component } from 'react';
import './Enter.css';
import Expectations from './Expectations.jsx';

class Cleanup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expTitle: 'Outdoor Block Expectations',
      expectations: [
        'Everyone participates in cleanup time',
        'No running or playing during cleanup time',
        'Once you complete your job, find another one to do',
        'When everyone is done with cleanup, you may use laptops',
     ],
     studentNames:['', '', '', '', '', '', '', '', '', '', ''],
     //studentNames2:['Brianna', 'Ashley'],
     roles: ['Sweeper', 'Sweeper', 'Dust Pan Assistant',
     'Headphone Manager', 'Laptop Manager', 'Desk Arranger',
     'Board Assistant', 'Library Assistant', 'Projector Monitor',
     'Desk Duster', 'blue bin organizer']
     //roles2: ['Dismissal Assitant', 'Binder Manager']
    }
  }

  render(){
    return(
      <Expectations
      expTitle = {this.state.expTitle}
      expectations = {this.state.expectations}
      studentNames = {this.state.studentNames}
      roles = {this.state.roles}
      />
    )

  }

}

export default Cleanup
