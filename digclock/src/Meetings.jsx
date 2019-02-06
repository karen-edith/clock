import React, { Component } from 'react';
import './Enter.css';
import Expectations from './Expectations.jsx';

class Meetings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expTitle: 'Outdoor Block Expectations',
      expectations: [
        'When Ms. Garcia calls your name, walk over to her desk',
        'During meeting, be respectful by listening to Ms. Garcia and politely asking questions and stating any concerns',
        'When your meeting is over, take your paycheck and read it through, then continue to work on homework',
        'if you are done with homework you can read, work on puzzles, or use the laptop (ixl/prodigy)'
     ],
     studentNames:['Nellie'],
     //studentNames2:['Brianna', 'Ashley'],
     roles: ['laptop Monitor']
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

export default Meetings
