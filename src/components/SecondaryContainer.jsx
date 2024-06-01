import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
  return (
    <>
    <MovieCard title={"Now Playing"} movie={movies.nowPlayingMovies}/>
    <MovieCard title={"Top Rated"} movie={movies.topRatedMovies}/>
    <MovieCard title={"Upcoming Movies"} movie={movies.upcomingMovies}/>
    <MovieCard title={"Popular"} movie={movies.popularMovies}/>



    </>
  )
}

export default SecondaryContainer