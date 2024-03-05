import React, { useState } from 'react'

const SimpleState = () => {
    const [count, setCount] = useState(0);

    function Increament(){
        setCount(count+1)
    }
    function Decreament(){
        setCount(count-1)
    }
    function Reset(){
        setCount(0)
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increament} >Increament</button>
      <button onClick={Decreament}>Decreament</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default SimpleState
