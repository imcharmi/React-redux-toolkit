import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState={
    loading:false,
    user:[],
    error:""

}

 export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(Response=>Response.data.map(user=>user))
})

const userSlice= createSlice({
    name:"user",
    initialState,
    extraReducers:(buider)=>{
        buider.addCase(fetchUsers.pending,state=>{
            state.loading=true
        })
        buider.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload
            state.error=""
        })
        buider.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.user=[]
            state.error=action.error.message
        })
    }
})

export default userSlice.reducer
