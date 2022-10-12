import { useState, useEffect } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  //   console.log("haha")
  // setCount(count);

//   useEffect(() => {
//     console.log("count rerendered");
//   }, [count]);

  //   useEffect(() => {
  //     // setCount(count+1);
  //     console.log("rendered");
  //     const timeOutId = setTimeout(() => {
  //       console.log("time out");
  //     }, 2000);

  //     return () => {
  //         console.log("cleaned up")
  //       clearTimeout(timeOutId);
  //     };
  //   });

  // setTimeout(()=>{
  //     console.log("time out")
  // },3000)

  return (
    <div>
      <div id="uuid">1st Count: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ADD
      </button>

      <div>2nd Count: {count2}</div>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        ADD
      </button>
    </div>
  );
}
