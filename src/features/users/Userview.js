import React,{ useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux"
import { fetchUsers } from './userSlice'

const Userview = () => {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading?<div>loading...</div>:null}
      {!user.loading && user.error ?<div>Error...{user.error}</div>:null}
      {user && user ?(
        <ul>
          {user.user.map((user)=>{
            return <li>{user.title}</li>
          })}
        </ul>
      ):null}
    </div>
  )
}

export default Userview
