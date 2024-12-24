import { createSlice } from "@reduxjs/toolkit";


export const testSlice = createSlice({
    name:"test",
    initialState:69,

    reducers:{
        testReducer:state =>{
            return state
        }
    }
})

export const testReducer = testSlice.actions
export default testSlice.reducer