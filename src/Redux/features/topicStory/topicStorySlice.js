import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



let initialState = {
    loading:false,
    data:[],
    all:[],
    error:false
}


const fetchStory = createAsyncThunk('topicStorySlice/fetchStory',()=>{
    return axios.get("https://gen-zsquare.com/api/news").then(response=>response.data);
})


const topicStorySlice =  createSlice({
    name:'topicStorySlice',
    initialState,
    reducers:{
        update:(state,action)=>{
            state.data = action.payload;
        }
    },
    extraReducers:(builder)=>{

        builder.addCase(fetchStory.pending,(state)=>{
            state.loading = true;
        })


        builder.addCase(fetchStory.fulfilled,(state,action)=>{

            state.loading = false;
            state.error = false;

            if(action.payload.length !== 0){

                action.payload = action.payload.map((item)=>{

                    let months =['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
                    let date = new Date(item.date_added?.split('.')[0])
            
                    let finaldate = `${months[date.getMonth()]}  ${date.getDate()},  ${date.getFullYear()}`;
    
                    item.date_added = finaldate;
    
                    return item;
            
                });
    
                state.all = action.payload;
    
                state.data = action.payload[0];
    

            }
          
        })


        builder.addCase(fetchStory.rejected,(state)=>{
            state.error = true;
            state.loading = false;
        })


    }
})

export default topicStorySlice.reducer;

export const {update} = topicStorySlice.actions;

export {fetchStory}