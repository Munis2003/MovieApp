import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducar from "./MovieSlice"

const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies:movieReducar
        }
    }
)

export default appStore;