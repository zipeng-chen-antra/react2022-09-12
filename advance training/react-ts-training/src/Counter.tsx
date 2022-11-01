import React, { MouseEvent, SyntheticEvent, useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState<number>(0);

    return <div>
        <div>Count: {count}</div>
        <button onClick={() => { setCount(count + 1) }}>ADD</button>
        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {

        }}>sus button</button>
        <div >

        </div>
        <input onChange={(e:React.FormEvent<HTMLInputElement>)=>{
            console.log(e.currentTarget.value)
        }}/>

    </div>
}

