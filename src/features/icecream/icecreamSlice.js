import {createSlice} from '@reduxjs/toolkit'
// import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState={
    numoficecream:20
}

const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numoficecream--
        },
        restocked:(state,action)=>{
            state.numoficecream+=action.payload
        }
    },
    // extraReducers:{
    //     ['cake/ordered']:state=>{
    //         state.numoficecream--
    //     }
    // }

    // extraReducers:(builder)=>{
    //     builder.addCase(cakeOrdered,state=>{
    //         state.numoficecream--
    //     })
    // }
})
export default icecreamSlice.reducer
export const {ordered,restocked}=icecreamSlice.actions