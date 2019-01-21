import React, {Component} from 'react';
import './App.css';
import {Button, Glyphicon, MenuItem, DropdownButton, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      swMode:false,
      swCounter:0,
      tmode: false,
      tCounter:0,
      monWedSched: ['Enter Room', 'Supper', 'Homework', 'Literature', 'Outdoor Time', 'Cleanup'],
      tueThurSched: ['Enter Room', 'Supper', 'Homework', 'Enrichment', 'Cleanup'],
      friSched: ['Enter Room', 'Outdoor Time', 'Supper', 'Homework', 'Individual Meetings with Ms. Garcia', 'Fun Friday Activities', 'outdoor Time', 'Cleanup' ]
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
    d[0] = "Sun";

    window.clock = setInterval( () => {
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

  startTimer() {
    console.log(this.state.tCounter)
    if (this.state.tCounter === 0){
      window.timer = setInterval(()=>{
        let z = this.state.swsec
        let newSec = z-1

        if (z === 0){
          clearInterval(window.timer)
          this.setState({swDisplay: '00:00:00', tCounter: 0})
        }

        if (z < 10) {
          let display = '00:00:0'+ z
          this.setState({swDisplay: display, swsec: newSec})
        } else if ((z >= 10) && (z < 60)) {
          let display = '00:00:'+ z
          this.setState({swDisplay: display, swsec: newSec})
        } else if ((z >= 60) && (z < 600)) {
          let secs = Math.round(((z/60) - Math.floor(z/60)) * 60)
          let min = Math.floor(z/60)
            if (secs < 10){
              let display = '00:0' + min + ':0' + secs
              this.setState({swDisplay: display, swsec: newSec })
            } else {
              let display = '00:0' + min + ':' + secs
              this.setState({swDisplay: display, swsec: newSec})
            }
        } else if ((z >= 600) && (z < 3600)) {
            let secs = Math.round(((z/60) - Math.floor(z/60)) * 60)
            let min = Math.floor(z/60)
              if(secs < 10){
                let display = '00:' + min + ':0' + secs
                this.setState({swDisplay: display, swsec: newSec})
              } else {
                let display = '00:' + min + ':' + secs
                this.setState({swDisplay: display, swsec: newSec})
              }
        } else if ((z >= 3600) && (z < 36000)) {
            let minutes = ((z/60) - Math.floor(z/60)) * 60
            let secs = (minutes/60) - Math.floor(minutes/60) * 60
            let hrs = Math.floor(z/120)
            if(minutes < 60) {
              if(secs < 10){
                let display = '0' + hrs + ':0' + minutes + ':0' + secs
                this.setState({swDisplay: display, swsec: newSec})
              } else {
                let display = '0' + hrs + ':0' + minutes + ':' + secs
                this.setState({swDisplay: display, swsec: newSec})
              }
            } else if (minutes >= 60) {
              if(secs < 10){
                let display = '0' + hrs + ':' + minutes + ':0' + secs
                this.setState({swDisplay: display, swsec: newSec})
              } else {
                let display = '0' + hrs + + minutes + ':' + secs
                this.setState({swDisplay: display, swsec: newSec})
              }
            }
        } else if(z >= 36000) {
          let minutes = ((z/60) - Math.floor(z/60)) * 60
          let secs = (minutes/60) - Math.floor(minutes/60) * 60
          let hrs = Math.floor(z/120)
          if(minutes < 60) {
            if(secs < 10){
              let display = hrs + ':0' + minutes + ':0' + secs
              this.setState({swDisplay: display, swsec: newSec})
            } else {
              let display = hrs + ':0' + minutes + ':' + secs
              this.setState({swDisplay: display, swsec: newSec})
            }
          } else if (minutes >= 60) {
            if(secs < 10){
              let display = hrs + ':' + minutes + ':0' + secs
              this.setState({swDisplay: display, swsec: newSec})
            } else {
              let display = hrs + ':' + minutes + ':' + secs
              this.setState({swDisplay: display, swsec: newSec})
            }
          }
        }
      }, 1000)
    }
  }

  startStopWatch() {
    console.log(this.state.swCounter)
    if (this.state.swCounter === 0){
      window.stopwatch = setInterval(()=>{
        let z = this.state.swsec
        let newSec = z+1
        if (z < 10) {
          let display = '00:00:0'+ z
          this.setState({swDisplay: display, swsec: newSec})
        } else if ((z >= 10) && (z < 60)) {
          let display = '00:00:'+ z
          this.setState({swDisplay: display, swsec: newSec})
        } else if ((z >= 60) && (z < 600)) {
          let secs = ((z/60) - Math.floor(z/60)) * 60
          let min = Math.floor(z/60)
            if (secs < 10){
              let display = '00:0' + min + ':0' + secs
              this.setState({swDisplay: display, swsec: newSec })
            } else {
              let display = '00:0' + min + ':' + secs
              this.setState({swDisplay: display, swsec: newSec})
            }
        } else if ((z >= 600) && (z < 3600)) {
            let secs = ((z/60) - Math.floor(z/60)) * 60
            let min = Math.floor(z/60)
              if(secs < 10){
                let display = '00:' + min + ':0' + secs
                this.setState({swDisplay: display, swsec: newSec})
              } else {
                let display = '00:' + min + ':' + secs
                this.setState({swDisplay: display, swsec: newSec})
              }
        } else if ((z >= 3600) && (z < 36000)) {
            let minutes = ((z/60) - Math.floor(z/60)) * 60
            let secs = (minutes/60) - Math.floor(minutes/60) * 60
            let hrs = Math.floor(z/120)
            if(minutes < 60) {
              if(secs < 10){
                let display = '0' + hrs + ':0' + minutes + ':0' + secs
                this.setState({swDisplay: display, swsec: newSec})
              } else {
                let display = '0' + hrs + ':0' + minutes + ':' + secs
                this.setState({swDisplay: display, swsec: newSec})
              }
            } else if (minutes >= 60) {
              if(secs < 10){
                let display = '0' + hrs + ':' + minutes + ':0' + secs
                this.setState({swDisplay: display, swsec: newSec})
              } else {
                let display = '0' + hrs + + minutes + ':' + secs
                this.setState({swDisplay: display, swsec: newSec})
              }
            }
        } else if(z >= 36000) {
          let minutes = ((z/60) - Math.floor(z/60)) * 60
          let secs = (minutes/60) - Math.floor(minutes/60) * 60
          let hrs = Math.floor(z/120)
          if(minutes < 60) {
            if(secs < 10){
              let display = hrs + ':0' + minutes + ':0' + secs
              this.setState({swDisplay: display, swsec: newSec})
            } else {
              let display = hrs + ':0' + minutes + ':' + secs
              this.setState({swDisplay: display, swsec: newSec})
            }
          } else if (minutes >= 60) {
            if(secs < 10){
              let display = hrs + ':' + minutes + ':0' + secs
              this.setState({swDisplay: display, swsec: newSec})
            } else {
              let display = hrs + ':' + minutes + ':' + secs
              this.setState({swDisplay: display, swsec: newSec})
            }
          }
        }

      }, 1000)
    }

  }

  stopStopWatch() {
    clearInterval(window.stopwatch)
    this.setState({swDisplay: '00:00:00', swsec: 0, swCounter:0})
  }

  stopTimer() {
    clearInterval(window.timer)
    this.setState({swDisplay: '00:00:00', swsec: 0, tCounter:0})
  }

  handleClickStopWatch() {
    if(this.state.swMode){
      this.setState({ swMode: false })
    } else { this.setState({ swMode: true }) }
  }

  handleClickTimer() {
    this.setState({tmode:true})
  }

  switchToClock() {
    this.setState({swMode: false, tmode:false})
  }

  itemColor(block) {
    if ((this.state.dayWeek === 'Sun' )|| (this.state.dayWeek === 'Wed')) {
      if((this.state.hrs === 16) && (this.state.min < 15)){
        if(block === 'Enter Room'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 16 && this.state.min >= 15 && this.state.min < 30 ) {
        if (block === 'Supper'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 16 && this.state.min >= 30 && this.state.min <=59 ) {
        if (block === 'Homework') {
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 17 && this.state.min >= 0 && this.state.min <30) {
        if (block === 'Literature'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 17 && this.state.min >= 30 && this.state.min <=59) {
        if (block === 'Outdoor Time'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 18 && this.state.min >=0) {
        if (block === 'Cleanup'){
          return 'items2'
        } else return 'items1'
      } else return 'items1'
    } else if (this.state.dayWeek === 'Tue' || this.state.dayWeek === 'Thu'){
      if(this.state.hrs === 16 && this.state.min < 15){
        if(block === 'Enter Room'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 16 && this.state.min >= 15 && this.state.min < 30 ) {
        if (block === 'Supper'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 16 && this.state.min >= 30 && this.state.min <=59 ) {
        if (block === 'Homework') {
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 17 && this.state.min >=0 && this.state.min <=59){
        if (block === 'Enrichment'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 18 && this.state.min >=0) {
        if (block === 'Cleanup'){
          return 'items2'
        } else return 'items1'
      } else return 'items1'
    } else if ((this.state.dayWeek === 'Fri')) {
      if((this.state.hrs === 13) && (this.state.min >=45) &&(this.state.min <=59)){
        if(block === 'Enter Room'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 14 && this.state.min < 30 ) {
        if (block === 'Outdoor Time'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 14 && this.state.min >= 30 && this.state.min <=59 ) {
        if (block === 'Supper') {
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 15 && this.state.min >= 0 && this.state.min <30) {
        if (block === 'Homework'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 15 && this.state.min >= 30 && this.state.min <=59) {
        if (block === 'Individual Meetings with Ms. Garcia'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 16 && this.state.min >=0 && this.state.min <=59) {
        if (block === 'Fun Friday Activities'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 17 && this.state.min >=0 && this.state.min <30) {
        if (block === 'Fun Friday Activities'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 17 && this.state.min >=30 && this.state.min <=59) {
        if (block === 'Outdoor Time'){
          return 'items2'
        } else return 'items1'
      } else if (this.state.hrs === 18 && this.state.min >=0) {
        if (block === 'Cleanup'){
          return 'items2'
        } else return 'items1'
      }else return 'items1'
    } else return 'items1'

  }

  chooseLink(item){
    if (item === 'Enter Room') {
      return ('/enter')
    } else if (item === 'Supper') {
      return ('/enter')
    } else if (item === 'Homework') {
      return ('/enter')
    } else if (item ==='Outdoor Time') {
      return ('/enter')
    } else if (item === 'Enrichment') {
      return ('/enter')
    } else if (item === 'Literature') {
      return ('/enter')
    }
  }

  render(){
    if (this.state.swMode) {
      return(
        <div className='encompassing'>
          <div className="container">
            <div className='title'> <h3 className='tfont'> <Glyphicon glyph='time'/> Ms. Garcia's Digital Clock </h3> </div>
            <div className='digitalwatchouter'>
              <div className='digitalwatchinner'>
                <h3 className='time'> {this.state.swDisplay} </h3>
              </div>
            </div>
            <div className = 'btns-container'>
              <div className='btns'>
                <Button bsSize='large' className='tbtn' onClick={()=>{this.switchToClock()}}> Clock </Button>
              </div>
              <div className='btns'>
                <Button bsSize='large' className='tbtn' onClick ={() => {this.setState({swCounter: 1}); this.startStopWatch()}}> Start </Button>
              </div>
              <div className='btns'>
                <Button bsSize='large' className='tbtn' onClick = {() =>{this.stopStopWatch()}}> Stop </Button>
              </div>
            </div>
          </div>
          <div className = 'schedule'>
            <div className = 'scheduleTitle'> <h2>Today's Schedule</h2> </div>
            {
              ((this.state.dayWeek === 'Mon') || (this.state.dayWeek === 'Wed'))
              ?
              (this.state.monWedSched.map((item, index) => {
                return (
                  <div key ={index} className ={this.itemColor(item)}> {item} </div>
                )
              }))
              :
              (((this.state.dayWeek === 'Tue') || (this.state.dayWeek === 'Thu'))
              ?
              (this.state.tueThurSched.map((item, index) => {
                return (
                  <div key ={index} className ={this.itemColor(item)}> {item} </div>
                )
              }))
              :
              ((this.state.dayWeek ==='Fri')
              ?
              (this.state.friSched.map((item, index) => {
                return (
                  <div key ={index} className ={this.itemColor(item)}> {item} </div>
                )
              }))
              :
              (<div className ={this.itemColor()}> Off Day </div>)))
            }
          </div>
        </div>


      )
    } else if (this.state.tmode) {
      return(
        <div>
          <div className="container">
            <div className='title'> <h3 className='tfont'> <Glyphicon glyph='time'/> Ms. Garcia's Digital Clock </h3> </div>
            <div className='digitalwatchouter'>
              <div className='digitalwatchinner'>
                <h3 className='time'> {this.state.swDisplay} </h3>
              </div>
            </div>

            <div className = 'btns-container'>
              <div className='btns'>
                <Button bsSize='large' className='tbtn' onClick={()=>{this.switchToClock()}}> Clock </Button>
              </div>
              <div className='btns'>
                <ButtonGroup justified>
                  <DropdownButton bsSize='large' className='ddbtn' title='Select Time' key='a' id = 'b'>
                    <MenuItem onClick={() => {this.setState({tCounter: 1}); this.setState({swsec:180}); this.startTimer()}} eventKey="1">3 minutes</MenuItem>
                    <MenuItem onClick={() => {this.setState({tCounter: 1}); this.setState({swsec:300}); this.startTimer()}} eventKey="2">5 minutes</MenuItem>
                    <MenuItem onClick={() => {this.setState({tCounter: 1}); this.setState({swsec:600}); this.startTimer()}} eventKey="3">10 minutes</MenuItem>
                    <MenuItem onClick={() => {this.setState({tCounter: 1}); this.setState({swsec:900}); this.startTimer()}} eventKey="4">15 minutes</MenuItem>
                  </DropdownButton>
                </ButtonGroup>
              </div>
              <div className='btns'>
                <Button bsSize='large' className='tbtn' onClick = {() =>{this.stopTimer()}}> Stop </Button>
              </div>
            </div>
          </div>
          <div className = 'schedule'>
            <div className = 'scheduleTitle'> <h2>Today's Schedule</h2> </div>
            {
              ((this.state.dayWeek === 'Sun') || (this.state.dayWeek === 'Wed'))
              ?
              (this.state.monWedSched.map((item, index) => {
                return (
                  <div key ={index} className ={this.itemColor(item)}> {item} </div>
                )
              }))
              :
              (((this.state.dayWeek === 'Tue') || (this.state.dayWeek === 'Thu'))
              ?
              (this.state.tueThurSched.map((item, index) => {
                return (
                  <div key ={index} className ={this.itemColor(item)}> {item} </div>
                )
              }))
              :
              ((this.state.dayWeek ==='Fri')
              ?
              (this.state.friSched.map((item, index) => {
                return (
                  <div key ={index} className ={this.itemColor(item)}> {item} </div>
                )
              }))
              :
              (<div className ={this.itemColor()}> Off Day </div>)))
            }
          </div>
        </div>

      )
    } else if (!this.state.swMode && !this.state.tmode){
      return(
        <div>
          <div className="container">
            <div className='title'> <h3 className='tfont'> <Glyphicon glyph='time'/> Ms. Garcia's Digital Clock </h3> </div>
            <div className='digitalwatchouter'>
              <div className='digitalwatchinner'>
                <h3 className='time'> {this.state.lzhrs}{this.state.hrs}:{this.state.lzmin}{this.state.min}:{this.state.lzsec}{this.state.sec} </h3>
                <h3 className='date'> {this.state.dayWeek} {this.state.month} {this.state.day} {this.state.year}</h3>
              </div>
            </div>
              <div className = 'btns-container'>
                <div className='btns'>
                  <Button bsSize='large' className='tbtn' onClick={()=>{this.handleClickStopWatch()}}> Stop Watch </Button>
                </div>
                <div className='btns'>
                  <Button bsSize='large' className='tbtn' onClick={()=>{this.handleClickTimer()}}> Timer </Button>
                </div>
              </div>
          </div>
          <div className = 'schedule'>
            <div className = 'scheduleTitle'> <h2>Today's Schedule</h2> </div>
            {
              ((this.state.dayWeek === 'Sun') || (this.state.dayWeek === 'Wed'))
              ?
              (this.state.monWedSched.map((item, index) => {

                return (
                  <div key ={index} className ={this.itemColor(item)} onClick = {() => {clearInterval(window.clock)}}> <Link className = 'linkColor' to={'/' + item.replace(/\s+/g, '')} > {item} </Link></div>
                )
              }))
              :
              (((this.state.dayWeek === 'Tue') || (this.state.dayWeek === 'Thu'))
              ?
              (this.state.tueThurSched.map((item, index) => {
                return (
                  <div key ={index} className ={this.itemColor(item)}> {item} </div>
                )
              }))
              :
              ((this.state.dayWeek ==='Fri')
              ?
              (this.state.friSched.map((item, index) => {
                return (
                  <div key ={index} className ={this.itemColor(item)}> {item} </div>
                )
              }))
              :
              (<div className ={this.itemColor()}> Off Day </div>)))
            }
          </div>
        </div>

      )
    }

  }
}

export default App;
