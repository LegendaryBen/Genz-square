import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



let initialState = {
    loading:false,
    data:[],
    error:false
}


const fetchMagazine = createAsyncThunk('fromMagazineSlice/fetchMAgazine',()=>{
    return axios.get("https://gen-zsquare.com/api/magazineStories").then(response=>response.data);
})




const fromMagazineSlice = createSlice({
    name:"fromMagazine",
    initialState,
    extraReducers:(builder)=>{

        builder.addCase(fetchMagazine.pending,(state)=>{
            state.loading = true;
            state.error = false;
        })


        builder.addCase(fetchMagazine.fulfilled,(state,action)=>{
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

        builder.addCase(fetchMagazine.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        })

    }
})


export default fromMagazineSlice.reducer;
export {fetchMagazine};
