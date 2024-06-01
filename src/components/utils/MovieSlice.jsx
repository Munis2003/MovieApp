import {createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: 'Movies',
    initialState:{
    nowPlayingMovies:null,
    TrailerVideo:null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies = action.payload
        },

        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload
        },

        addTopRatedMovies:(state,action) => {
            state.topRatedMovies = action.payload
        },

        addUpcomingMovies:(state,action) => {
            state.upcomingMovies = action.payload
        }

        // addTrailerVideo: (state, action) =>{
        //     state.TrailerVideo = action.payload
        // }
    }
})

export const {addNowPlayingMovies,
              addPopularMovies,
              addTopRatedMovies,
              addUpcomingMovies} = movieslice.actions;
              
export default movieslice.reducer