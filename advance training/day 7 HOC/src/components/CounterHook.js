import useCounter from "../hooks/useCounter";

export default function CounterHook() {
  

    const {addByAmount, count,reset,increment,decrement,amountRef,} = useCounter();
  

  return (
    <div>
      <div>{count}</div>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>minus</button>
      <input type="number" ref={amountRef} />
      <button onClick={addByAmount}>add by amount</button>
    </div>
  );
}