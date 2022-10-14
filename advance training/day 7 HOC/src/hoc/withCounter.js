import { useRef, useState } from "react";

//withCounter is just a component generator, all these generated components share a similar logic
export function withCounter(InnerComponent) {
  return function OuterComponent({...props}) {
    const [count, setCount] = useState(0);

    const amountRef = useRef();

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount(0);
    const addByAmount = () =>
      setCount((prev) => prev + +amountRef.current.value);

    return (
      <div>
        <InnerComponent
          count={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
          addByAmount={addByAmount}
          amountRef={amountRef}
          {...props}
        />
      </div>
    );
  };
}


