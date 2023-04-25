import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import { ordered, restocked } from './cakeSlice'
import { useState } from 'react'

const CakeView = () => {
  const [value, setValue] = useState(1);
  const numofCakes=useSelector((state)=>state.cake.numofCakes)
  const dispatch=useDispatch()
  return (
    <div>
        <h2>Number of Cakes {numofCakes} </h2>
        <button onClick={()=>dispatch(ordered())}>Order Cake</button>
        <input type="number" onChange={(e)=>setValue(parseInt(e.target.value))} />
        <button onClick={()=>dispatch(restocked(value))}>Restoke Cakes</button>      
    </div>
  )
}

export default CakeView
