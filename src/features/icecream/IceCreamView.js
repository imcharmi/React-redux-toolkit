import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import { ordered , restocked } from './icecreamSlice'

const IceCreamView = () => {
  const numoficecream=useSelector((state)=>state.icecream.numoficecream)
  const dispatch=useDispatch()
  return (
    <div>
      <h2>Number of IceCream {numoficecream} </h2>
        <button onClick={()=>dispatch(ordered())} >Order IceCream</button>
        <button onClick={()=>dispatch(restocked(10))}>Restoke IceCream</button>      
    </div>
  )
}

export default IceCreamView
