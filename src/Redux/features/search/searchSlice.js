import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    loading:true,
    error:false,
    data:[]
}


const fetchSearch = createAsyncThunk('searchSlice/fetchSearch',(arg)=>{
    return axios.get(`https://gen-zsquare.com/api/stories?search=${arg}`).then(response=>response.data);
})



let searchSlice = createSlice({
    name:"search",
    initialState,
    extraReducers:(builder)=>{

        builder.addCase(fetchSearch.pending,(state)=>{
            state.loading = true;
            state.error = false;
        })

        builder.addCase(fetchSearch.fulfilled,(state,action)=>{
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
    
                state.data = action.payload;

            }else{

                state.data = action.payload;

            }

        })

        builder.addCase(fetchSearch.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        })


    }
})


export default searchSlice.reducer;
export {fetchSearch};

