import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";



export default function CounterFn() {
    
  const value = useSelector(state=>state.value);
  const dispatch = useDispatch()

  function handleAdd(){
    dispatch({type:"counter/incremented"});
  }
  function handleMinus(){
    dispatch({type:"counter/decremented"});
  }

  function reset(){
    dispatch({type:"counter/reset"})
  }

  return (
    <div>
      <h1>The Counter Function</h1>
      <div>value: {value}</div>
      <button onClick={handleAdd}>
        ADD
      </button>
      <button onClick={handleMinus}>
        MINUS
      </button>
      <button onClick={reset}>
        RESET
      </button>
    </div>
  );
}
