import { useState, useRef } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const amountRef = useRef();

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const addByAmount = () => setCount((prev) => prev + +amountRef.current.value);


    return {count,setCount,increment,decrement,reset,addByAmount}
    // return [count,setCount,increment,decrement,reset,addByAmount]

}
