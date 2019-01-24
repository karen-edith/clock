import React, { Component } from 'react';
import './Enter.css';
import Expectations from './Expectations.jsx'

class Homework extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expTitle: 'Homework Block Expectations',
      expectations: [
        'Enter room at level 0-1, takeout homework, and have a seat',
        '15 minutes of level 0 - no talking of any form, you should be focused on your homework without any distractions',
        'If you are done with your homework your options are: Laptops, reading, arts/crafts, puzzles',
        'After 15 minutes of level 0, you may turn and talk at a level 1 - keep converstations about homework',
        'At the end of Homework block, you have 2 minutes to put all homework, laptops, books, art/crafts, puzzles away and have a seat'
     ],
     studentNames:['Allison', 'Angelica'],
     roles: ['Timer Assistant', 'Attention Getter Assistant']
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

export default Homework
