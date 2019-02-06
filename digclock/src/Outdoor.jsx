import React, { Component } from 'react';
import './Enter.css';
import Expectations from './Expectations.jsx';

class Outdoor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expTitle: 'Outdoor Block Expectations',
      expectations: [
        'Line up in a straight line - that means tracking forward, no pushing, no pulling, no play fighting, and keep voice at a level 1',
        'Walk down to playground in a straight line while keeping voice at a level 1 or level 0',
        'Be aware of and respected boundaries marked by cones',
        'if you want specific equipment, ask Ms. Garcia to get it for you',
        'Play respectfully with other scholars - no pushing, pulling, fighting',
        'Put equipment away when Ms. Garcia asks you to',
        'Grab a drink of water (if you need it) and form a line along the designated blue line',
        'When going back to class from MPR, line up in a straight line - that means tracking forward, no pushing, no pulling, no play fighting, and keep voice at a level 0-1',
        'Walk, do not run back up to class and follow Ms. Garcia"s instructions'
     ],
     studentNames:['Julio', 'Jayden', 'Steven'],
     //studentNames2:['Brianna', 'Ashley'],
     roles: ['Equipment Monitor', 'Equipment Monitor', 'Signout Binder Carrier']
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

export default Outdoor
