import { configureStore } from "@reduxjs/toolkit";
import landingpageSlice from "../features/landingpageSlice/landingpageSlice";
import sliderSlice from "../features/slider/sliderSlice";
import topicStorySlice from "../features/topicStory/topicStorySlice";
import fromMagazineSlice from "../features/fromMagazine/fromMagazineSlice";
import trendingSlice from "../features/trending/trendingSlice";
import searchSlice from "../features/search/searchSlice";


const store = configureStore({
    reducer:{
        landingpage:landingpageSlice,
        slider:sliderSlice,
        topicstory:topicStorySlice,
        fromMagazine:fromMagazineSlice,
        trending:trendingSlice,
        search:searchSlice
    }
})


export default store;