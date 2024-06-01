import { API_Options } from '../components/utils/Constant'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addPopularMovies} from '../components/utils/MovieSlice'


const usePopularMovies = () =>{
    const dispatch =  useDispatch()
  const getpopularmovies = async () =>{
   const data =  await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options)
   const json = await data.json()
   console.log(json)
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
    getpopularmovies();
  },[])
}

export default usePopularMovies;