import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    loading:false,
    data:[],
    error:false
}


const fetchSlides = createAsyncThunk('sliderSlice/fetchSlides',()=>{
    return axios.get("https://gen-zsquare.com/api/news").then(response=>response.data);
})



 const sliderSlice = createSlice({
    name:'sliderSlice',
    initialState,
    extraReducers:(builder)=>{

        builder.addCase(fetchSlides.pending,(state)=>{
            state.loading = true;
            state.error = false;
        })

        builder.addCase(fetchSlides.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = false;

            action.payload = action.payload.map((item)=>{

                let months =['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

                let date = new Date(item.date_added?.split('.')[0])
        
                let finaldate = `${months[date.getMonth()]}  ${date.getDate()},  ${date.getFullYear()}`;

                item.date_added = finaldate;

                return item;
        
            });

            state.data = action.payload;



        })

        builder.addCase(fetchSlides.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        })

    }
 })


 export default sliderSlice.reducer;
 export {fetchSlides};