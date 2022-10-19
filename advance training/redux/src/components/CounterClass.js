import React, { useState, useSyncExternalStore } from "react";
import { connect } from "react-redux";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    // this.handleAdd = this.handleAdd.bind(this);
    // this.handleMinus = this.handleMinus.bind(this);
    // this.reset = this.reset.bind(this);
  }

  // handleAdd() {
  //   this.props.dispatch({ type: "counter/incremented" });
  // }
  // handleMinus() {
  //   this.props.dispatch({ type: "counter/decremented" });
  // }

  // reset() {
  //   this.props.dispatch({ type: "counter/reset" });
  // }

  render() {
    return (
      <div>
        <h1>The Counter Class</h1>
        <div>value: {this.props.value}</div>

        <button onClick={this.props.increment}>ADD</button>
        <button onClick={this.props.decrement}>MINUS</button>
        <button onClick={this.props.reset}>RESET</button>
        {/* <button onClick={this.handleAdd}>ADD</button>
        <button onClick={this.handleMinus}>MINUS</button>
        <button onClick={this.reset}>RESET</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ value: state.value });
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: "counter/incremented" }),
    decrement: () => dispatch({ type: "counter/decremented" }),
    reset: () => dispatch({ type: "counter/reset" }),
  };
  // return {dispatch};
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);

// const hoc = (InnerComp) => {

//   return class OuterComp extends React.Component {

//     constructor(props){
//       super(props);
//     }

//     render(){
//       return <InnerComp {...props} value={}/>
//     }
//   }

// }
