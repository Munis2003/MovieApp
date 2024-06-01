import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
  if(!movies) return null;

  const mainmovie = movies[8]

  const {original_title,overview,poster_path,release_date,vote_average,id,} = mainmovie 
  return (
    <>
    <div className='aspect-video'>
      <VideoTitle title={original_title} desc={overview} poster={poster_path} release = {release_date} ratings={vote_average} />
      <VideoBackground movieId={id}/>

    </div>
    </>
  )
}

export default MainContainer