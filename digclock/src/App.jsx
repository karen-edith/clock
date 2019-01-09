import React, {Component} from 'react';
import './App.css';
import {Button, Glyphicon} from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      hrs:'00',
      min:'00',
      sec:'00',
      month:'',
      day:'',
      year:'',
      dayWeek:'',
      tzone:'',
      lzhrs: '',
      lzmin:'',
      lzsec:'',
      isDateOn: 'Display Date',
      isStopWatch: 'Stop Watch'
    }
  }

  componentDidMount(){
    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = [];
    d[1] = "Mon";
    d[2] = "Tue";
    d[3] = "Wed";
    d[4] = "Thu";
    d[5] = "Fri";
    d[6] = "Sat";
    d[7] = "Sun";

    setInterval( () => {
      let currentTime = new Date();
      let mon = currentTime.getMonth();
      let dweek = currentTime.getDay();

      let h = currentTime.getHours();
      let m = currentTime.getMinutes();
      let s = currentTime.getSeconds();


      if (h < 10){
        this.setState({
          lzhrs:'0'
        })
      }

      if (h >= 10){
        this.setState({
          lzhrs:''
        })
      }

      if (m < 10){
        this.setState({
          lzmin:'0'
        })
      }

      if (m >= 10){
        this.setState({
          lzmin:''
        })
      }

      if (s < 10){
        this.setState({
          lzsec:'0'
        })
      }

      if (s >= 10){
        this.setState({
          lzsec:''
        })
      }

      this.setState({
          hrs: currentTime.getHours(),
          min: currentTime.getMinutes(),
          sec: currentTime.getSeconds(),
          month: month[mon],
          day: currentTime.getDate(),
          year: currentTime.getFullYear(),
          dayWeek:d[dweek]
        })
       }, 1000)
  }

  handleClick(){
    if(this.state.isDateOn === 'Display Date'){
      this.setState({
        isDateOn: 'Hide Date'
      })
    } else {
      this.setState({
        isDateOn: 'Display Date'
      })
    }
  }

  handleClickStopWatch() {
    if(this.state.isStopWatch === 'Stop Watch'){
      this.setState({
        isStopWatch: 'Hide Stop Watch'
      })
    } else {
      this.setState({
        isStopWatch: 'Stop Watch'
      })
    }
  }

  render(){
    return(
      <div className="container">
        <div className='title'> <h3 className='tfont'> <Glyphicon glyph='time'/> Digital Clock </h3> </div>
        <div className='digitalwatchouter'>
          {
            (this.state.isDateOn === 'Hide Date') ?
            (
              <div className='digitalwatchinner'>
                <h3 className='time'> {this.state.lzhrs}{this.state.hrs}:{this.state.lzmin}{this.state.min}:{this.state.lzsec}{this.state.sec} </h3>
                <h3 className='date'> {this.state.dayWeek} {this.state.month} {this.state.day} {this.state.year}</h3>
              </div>
            ) :

            (
              <div className='digitalwatchinner'>
                <h3 className='time'> {this.state.lzhrs}{this.state.hrs}:{this.state.lzmin}{this.state.min}:{this.state.lzsec}{this.state.sec} </h3>
              </div>
            )
          }

        </div>
        <div className='btns'>
          <Button bsSize='large' className='tbtn' onClick={()=>{this.handleClick()}}> {this.state.isDateOn}</Button>
        </div>
        <div className='btns'>
          <Button bsSize='large' className='tbtn' onClick={()=>{this.handleClickStopWatch()}}> {this.state.isStopWatch}</Button>
        </div>
      </div>
    )
  }
}

export default App;
