import React, { useState } from 'react'

export default function Counter() {

    const [value,setValue] = useState<number>(0);


  return (
    <div>
        <div>Count: {value}</div>
        <button role="add-btn" onClick={()=>{setValue(value+1)}}>ADD</button>
    </div>
  )
}
