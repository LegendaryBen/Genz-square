import { configureStore } from "@reduxjs/toolkit";
import landingpageSlice from "../features/landingpageSlice/landingpageSlice";
import sliderSlice from "../features/slider/sliderSlice";


const store = configureStore({
    reducer:{
        landingpage:landingpageSlice,
        slider:sliderSlice
    }
})


export default store;