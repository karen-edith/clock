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
      swsec:0,
      swDisplay: '00:00:00',
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

  startStopWatch() {
    setInterval(()=>{
      let z = this.state.swsec
      let newSec = z+1
      if (z < 10) {
        let display = '00:00:0'+z
        this.setState({swdisplay: display, swsec: newSec})
      } else if ((z > 10) && (z < 60)) {
        let display = '00:00:'+z
        this.setState({swdisplay: display, swsec: newSec})
      } else if ((z > 60) && (z < 600)) {
        let secs = ((z/60) - Math.floor(z/60)) * 60
        let min = Math.floor(z/60)
          if (secs < 10){
            let display = '00:0' + min + ':0' + secs
            this.setState({swdisplay: display, swsec: newSec })
          } else {
            let display = '00:0' + min + ':' + secs
            this.setState({swdisplay: display, swsec: newSec})
          }
      } else if ((z > 60) && (z > 600) && (z < 3600)) {
          let secs = ((z/60) - Math.floor(z/60)) * 60
          let min = Math.floor(z/60)
            if(secs < 60){
              let display = '00:' + min + ':' + '0' + secs
              this.setState({swdisplay: display, swsec: newSec})
            } else {
              let display = '00:' + min + ':' + secs
              this.setState({swdisplay: display, swsec: newSec})
            }
      } else if ((z > 3600) && (z < 36000)) {
          let minutes = ((z/60) - Math.floor(z/60)) * 60
          let secs = (minutes/60) - Math.floor(minutes/60) * 60
          let hrs = Math.floor(z/120)
          if(minutes < 60) {
            if(secs < 60){
              let display = '0' + Math.floor(z/60) + ':' + '0' + minutes + ':' + '0' + secs
              this.setState({swdisplay: display, swsec: newSec})
            } else {
              let display = '0' + Math.floor(z/60) + ':' + '0' + minutes + ':' + secs
              this.setState({swdisplay: display, swsec: newSec})
            }
          } else if (minutes > 60) {
            if(secs < 60){
              let display = '00:' + Math.floor(z/60) + ':' + minutes + ':' + '0' + secs
              this.setState({swdisplay: display, swsec: newSec})
            } else {
              let display = '00:' + Math.floor(z/60) + ':' + minutes + ':' + secs
              this.setState({swdisplay: display, swsec: newSec})
            }
          }
      } else if(z > 36000) {
        let minutes = ((z/60) - Math.floor(z/60)) * 60
        let secs = (minutes/60) - Math.floor(minutes/60) * 60
        if(minutes < 60) {
          if(secs < 60){
            let display = Math.floor(z/60) + ':' + '0' + minutes + ':' + '0' + secs
            this.setState({swdisplay: display, swsec: newSec})
          } else {
            let display = Math.floor(z/60) + ':' + '0' + minutes + ':' + secs
            this.setState({swdisplay: display, swsec: newSec})
          }
        } else if (minutes > 60) {
          if(secs < 60){
            let display = Math.floor(z/60) + ':' + minutes + ':' + '0' + secs
            this.setState({swdisplay: display, swsec: newSec})
          } else {
            let display = '00:' + Math.floor(z/60) + ':' + minutes + ':' + secs
            this.setState({swdisplay: display, swsec: newSec})
          }
        }
      }
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
    if (this.state.isStopWatch === 'Stop Watch') {
      return(
        /*<div className="container">
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
        </div>*/
        <div> {this.state.swdisplay} </div>
      )
    } else {
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
}

export default App;
