import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      time:''
    }
  }

  render(){
    return(
      <div>
        <h3> Digital Watch </h3>
        <h3> hh:mm:ss </h3>
        <h3> City, State </h3>
        <button> City </button>
        <button> Display Three Cities </button>

      </div>
    )
  }
}

export default App;
