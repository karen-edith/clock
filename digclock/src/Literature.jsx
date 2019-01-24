import React, { Component } from 'react';
import './Enter.css';
import Expectations from './Expectations.jsx'

class Literature extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expTitle: 'Literature Block Expectations',
      expectations: [
        'First 10 minutes of Literature give Ms. Garcia your undivided attention by being seated, tracking her, and keeping yourself at a level 0',
        'Participate in discussion by raising your and wait patiently before you speak',
        'Participate in group reading by keeping your voice at a level 1 and following along as classmates read ',
        'If you need to get out of your seat, raise your hand and get permission before you do so'
     ],
     studentNames:['Nellie', 'Jeihser', 'Steven', 'Gabriela'],
     roles: ['Supply Assistant', 'Supply Assisant', 'Lights Manager', 'Alexa Manager']
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

export default Literature
