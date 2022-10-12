import React, { Component } from 'react'

export default class ClassCounter extends Component {

constructor(props){
  super(props);
  this.state = {
    count: 0,
    count1 :0
  }
}
    
componentDidMount(){
    console.log("class counter mounted")
}

componentDidUpdate(){
  if(prevState.count===currState.count){
    console.log("some message")
  }
}

  render() {
    return (
      <div>ClassCounter</div>
    )
  }
}
