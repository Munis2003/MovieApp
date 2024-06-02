import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducar from "./MovieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies: movieReducar,
            gpt: gptReducer,
            lang: configReducer
        }
    }
)

export default appStore;