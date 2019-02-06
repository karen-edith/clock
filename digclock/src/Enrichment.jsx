import React, { Component } from 'react';
import './Enter.css';
import Expectations from './Expectations.jsx';

class Enrichment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expTitle: 'Enrichment Block Expectations',
      expectations: [
        'Line up in a straight line - that means tracking forward, no pushing, no pulling, no play fighting, and keep voice at a level 1',
        'Walk down to Enrichment room',
        'Follow Rules and Procedures set by your Enrichment Team Leader',
        'When Enrichment block is over, walk to our room and enter at a level 1'
     ],
     studentNames:['Dominic', 'Joshua'],
     //studentNames2:['Brianna', 'Ashley'],
     roles: ['Laptop Monitor', 'Login Card Manager']
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

export default Enrichment
