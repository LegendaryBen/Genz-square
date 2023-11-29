import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    loading:false,
    data:[],
    error:false
}

const fetchHomestory = createAsyncThunk('landingpageSlice/fetchHomestory',()=>{
    return axios.get("https://gen-zsquare.com/api/news").then(response=>response.data);
}) 


const landingpageSlice = createSlice({
    name:'landingpage',
    initialState,
    extraReducers:(builder)=>{

        builder.addCase(fetchHomestory.pending,(state)=>{
            state.loading = true;
            state.error = false;
        })

        builder.addCase(fetchHomestory.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = false;
            let size = action.payload.length;
            let number = Math.floor(Math.random()*size);
            state.data = action.payload[number];
        })

        builder.addCase(fetchHomestory.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        })
    }
})


export default landingpageSlice.reducer;
export {fetchHomestory}