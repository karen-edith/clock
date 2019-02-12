import React, { Component } from 'react';
import './ThisWeek.css';

class ThisWeek extends Component {
  render() {
    return (
      <div className='activitiesContainer'>
        <div className ='outer'> <div className='Sports'> <div className='inner'> Sports </div> </div> </div>
        <div className ='outer'> <div className='Ranking'> <div className='inner'> Homework Ranking </div> </div> </div>
        <div className ='outer'> <div className='Loud'> <div className='inner'> Loud </div> </div> </div>
        <div className ='outer'> <div className='Dance'> <div className='inner'> Dance </div> </div> </div>
        <div className ='outer'> <div className='Announce'> <div className='inner'> Announcements </div> </div> </div>
        <div className ='outer'> <div className='Trips'> <div className='inner'> Field Trips </div> </div> </div>
      </div>
    )
  }
}

export default ThisWeek;
