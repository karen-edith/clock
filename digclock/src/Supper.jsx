import React, { Component } from 'react';
import './Enter.css';
import Expectations from './Expectations.jsx'

class Supper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expTitle: 'Supper Block Expectations',
      expectations: [
        'Line up in a straight line - that means tracking forward, no pushing, no pulling, no play fighting, and keep voice at a level 1',
        'Walk down to MPR in a straight line while keeping voice at a level 1 or level 0',
        'Walk into MPR at a level 0-1 and go around tables to get supper, once you get supper sit at our designated table',
        'if you need to get out of your seat, raise your hand before you get up',
        'Track and follow instructions of team leader conducting MPR Dismissal',
        'When dismissed, pick up all of your trash (including trash on near you on the floor)',
        'When going back to class from MPR, line up in a straight line - that means tracking forward, no pushing, no pulling, no play fighting, and keep voice at a level 0-1',
        'Walk, do not run back up to class and follow Ms. Garcia"s instructions'
     ],
     studentNames:['Nellie', 'Gabriela', 'Alyssa', 'Angelica', 'Brianna', 'Ashley'],
     //studentNames2:['Brianna', 'Ashley'],
     roles: ['Line Leader', 'Door Holder', 'Key Holder', 'Dismissal Attention Getter', 'Dismissal Assitant', 'Binder Manager']
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

export default Supper
