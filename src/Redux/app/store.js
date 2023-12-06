import { configureStore } from "@reduxjs/toolkit";
import landingpageSlice from "../features/landingpageSlice/landingpageSlice";
import sliderSlice from "../features/slider/sliderSlice";
import topicStorySlice from "../features/topicStory/topicStorySlice";
import fromMagazineSlice from "../features/fromMagazine/fromMagazineSlice";
import trendingSlice from "../features/trending/trendingSlice";


const store = configureStore({
    reducer:{
        landingpage:landingpageSlice,
        slider:sliderSlice,
        topicstory:topicStorySlice,
        fromMagazine:fromMagazineSlice,
        trending:trendingSlice,
    }
})


export default store;