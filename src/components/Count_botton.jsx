import React, { useState } from 'react'
import "./Count.css"

const Count = () => {
    const [ Count, setCount]= useState(1)
const increment=(c)=>{
    setCount((c)=>
c+1
    )

}

const decrement=(c)=>{
    if( Count>0)

    setCount((c)=>
    
        c-1
    )

}
  return (
    <div className='Countbtn'>
  <button className="decrement"onClick={decrement}>-</button>


      <h2> {Count}</h2>
      <button className='increment' onClick={increment}>+</button>

    </div>
  )
}

export default Count
