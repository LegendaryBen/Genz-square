import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    login:false
}




let loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        update:(state)=>{
            state.login = true;
        }
    }
})

export const { update} = loginSlice.actions;
export default loginSlice.reducer;

