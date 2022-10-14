import React, { useRef, useState } from "react";
import { withCounter } from "../hoc/withCounter";

// export default function CounterFn() {
//   const [count, setCount] = useState(0);

//   const amountRef = useRef();

//   const increment = () => setCount((prev) => prev + 1);
//   const decrement = () => setCount((prev) => prev - 1);
//   const reset = () => setCount(0);
//   const addByAmount = () => setCount((prev) => prev + +amountRef.current.value);

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={reset}>reset</button>
//       <button onClick={increment}>minus</button>
//       <button onClick={decrement}>add</button>
//       <input type="number" ref={amountRef} />
//       <button onClick={addByAmount}>add by amount</button>
//     </div>
//   );
// }

function CounterFn(props) {
  const { count, increment, decrement, reset, addByAmount, amountRef, message } = props;

  return (
    <div>
      <div>{count}</div>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>minus</button>
      <button onClick={increment}>add</button>
      <div>{message}</div>
      {/* <input type="number" ref={amountRef} />
      <button onClick={addByAmount}>add by amount</button> */}
    </div>
  );
}

export default withCounter(CounterFn);