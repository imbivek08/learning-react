import React, { useReducer } from 'react'


let initialState = 0;
function reducer(state,action){
    switch(action){
        case 'increament':
            return state+1
        case 'decreament':
            return state -1
        case 'reset':
            return initialState
        default :
            return state
    }
}

const Reducer = () => {
   const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch('increament')} >Increament</button>
      <button onClick={()=>dispatch('decreament')}>Decreament</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Reducer
