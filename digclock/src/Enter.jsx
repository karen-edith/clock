import React, { Component } from 'react';
import './Enter.css';
import { Link } from 'react-router-dom';
import Expectations from './Expectations.jsx'

class Enter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expTitle: 'Entering Room Expectations',
      expectations: [
        'Line up outside in a straight line - track forward with voice at a level 1',
        'Take out homework, book, or grab art/crafts supplies from bin ',
        'Put Backpack away on Rack',
        'Have a seat and work on selected option and keep voice at a level 1',
        'For announcements, track Ms. Garcia when she requests your attention with an attention getter',
        'Once You are done with your Job, Let Ms. Garcia know and have a seat',
        'Everyon one else should have a seat'
     ],
     studentNames:['Nellie', 'Joshua', 'Reizo', 'Julio', 'Jeihser', 'Alyssa', 'Dominic','Allison'],
     roles: ['Line Leader', 'Sign-In Manager', 'Backpack Manger', 'Projector Assistant', 'Attendance Assistant', 'Laptop Setup Assistant', 'Backpack Manager', 'Timer Assistant']
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

export default Enter
