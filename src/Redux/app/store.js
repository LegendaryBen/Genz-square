import { configureStore } from "@reduxjs/toolkit";
import landingpageSlice from "../features/landingpageSlice/landingpageSlice";
import sliderSlice from "../features/slider/sliderSlice";
import topicStorySlice from "../features/topicStory/topicStorySlice";


const store = configureStore({
    reducer:{
        landingpage:landingpageSlice,
        slider:sliderSlice,
        topicstory:topicStorySlice
    }
})


export default store;