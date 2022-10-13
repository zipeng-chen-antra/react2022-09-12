import React, { useState, useRef } from "react";
import { withCounter } from "../hoc/withCounter";

// export default function StockFn() {
//     const [shares,setShares] = useState(0);

//     const amountRef = useRef();

//     const increment = () => setShares((prev) => prev + 1);
//     const decrement = () => setShares((prev) => prev - 1);
//     // const reset = () => setShares(0);
//     const addByAmount = () => setShares((prev) => prev + +amountRef.current.value);

//     return (
//       <div>
//         <div>{shares} shares</div>
//         {/* <button onClick={reset}>reset</button> */}
//         <button onClick={increment}>sell a share</button>
//         <button onClick={decrement}>buy 1 share</button>
//         <input type="number" ref={amountRef} />
//         <button onClick={addByAmount}>buy stocks by amount</button>
//       </div>
//     );
// }

function StockFn(props) {
  const { count:shares, increment, decrement, addByAmount, amountRef } = props;
  return (
    <div>
      <div>{shares} shares</div>
      {/* <button onClick={reset}>reset</button> */}
      <button onClick={decrement}>sell 1 share</button>
      <button onClick={increment}>buy 1 share</button>
      <input type="number" ref={amountRef} />
      <button onClick={addByAmount}>buy stocks by amount</button>
    </div>
  );
}

export default withCounter(StockFn)
