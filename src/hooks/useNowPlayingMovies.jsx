import { API_Options } from '../components/utils/Constant'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addNowPlayingMovies } from '../components/utils/MovieSlice'


const useNowPlayingMovies = () =>{
    const dispatch =  useDispatch()
  const getnowplaying = async () =>{
   const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
   const json = await data.json()

    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getnowplaying();
  },[])
}

export default useNowPlayingMovies;