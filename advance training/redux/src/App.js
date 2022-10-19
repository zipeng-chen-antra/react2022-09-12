import { useState, useEffect } from "react";
import "./App.css"
import CounterFn from "./components/CounterFn";
import CounterClass from "./components/CounterClass";
import OurReduxApp from "./components/OurReduxApp";



export default function App() {
  return (
    <div>
      <OurReduxApp/>
      {/* <CounterFn/>
      <CounterClass/> */}
    </div>
  );
}
