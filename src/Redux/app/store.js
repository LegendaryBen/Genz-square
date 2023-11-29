import { configureStore } from "@reduxjs/toolkit";
import landingpageSlice from "../features/landingpageSlice/landingpageSlice";


const store = configureStore({
    reducer:{
        landingpage:landingpageSlice
    }
})


export default store;