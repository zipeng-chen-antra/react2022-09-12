import React, { useState, useRef, useEffect } from "react";
import { withCounter } from "../hoc/withCounter";
import { withLoader } from "../hoc/withLoader";
import getStock from "../api/getStock";

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
  const {
    count: shares,
    setCount: setShares,
    increment,
    decrement,
    addByAmount,
    amountRef,
    isLoading,
    completeLoading,
    loadMessage
  } = props;

  useEffect(() => {
    getStock().then((data) => {
      setShares(data.shares);
      completeLoading()
    });
  }, []);

  return (
    <div>

      {isLoading ? loadMessage : <>
      <div>{shares} shares</div>
      {/* <button onClick={reset}>reset</button> */}
      <button onClick={decrement}>sell 1 share</button>
      <button onClick={increment}>buy 1 share</button>
      <input type="number" ref={amountRef} />
      <button onClick={addByAmount}>buy stocks by amount</button>
      </>}
    </div>
  );
}

export default withLoader(withCounter(StockFn),{type:"bar"});


