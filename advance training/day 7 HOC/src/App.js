import { useState, useEffect } from "react";
import CounterClass from "./components/CounterClass";
import CounterFn from "./components/CounterFn";
import StockFn from "./components/StockFn";

export default function App() {

  return (
    <div>
      <CounterFn />
      <StockFn />
      <Button text="click me" style={{backgroundColor:"red"}}></Button>

    </div>
  );
}


function Button({style,text}){
  return <button style={style}>
    {text}
  </button>
}


