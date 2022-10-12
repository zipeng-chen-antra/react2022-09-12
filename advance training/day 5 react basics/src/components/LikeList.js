import { useState, useEffect } from "react";

const INIT_STATE = [0,0,0,0];

export default function LikeList() {
    const [counts,setCounts] = useState(INIT_STATE);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         console.log("count should be updated")
    //         setCount(100)
    //     },1000)
    // },[])

    useEffect(()=>{
        console.log("rerendered")
    })

  return (
    <div>
        <button onClick={()=>{
            setCounts(INIT_STATE)
        }}>Reset All Children</button>
        {counts.map((count,index)=>{
            return <Like key={index} index={index} count={count} setCounts={setCounts}/>
        })}
    </div>
  );
}

export function Like({index,count,setCounts}) {
  const handleClick = () => {
    // setLikes(click?likes-1:likes+1);
    // setClick(!click);

    setCounts(prev=>{
        console.log(prev);
        return prev.map((count,i)=>{
            if(index===i) return count + 1;
            return count;
        })
    })
  };

  return (
    <div className="App">
      <button onClick={handleClick}>
        like | {count}
      </button>
    </div>
  );
}
