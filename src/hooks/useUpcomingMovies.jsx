import { API_Options } from '../components/utils/Constant'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addUpcomingMovies} from '../components/utils/MovieSlice'


const useUpcomingMovies = () =>{
    const dispatch =  useDispatch()
  const getupcomingmovies = async () =>{
   const data =  await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options)
   const json = await data.json()
   console.log(json)
    dispatch(addUpcomingMovies(json.results))
  }

  useEffect(()=>{
    getupcomingmovies();
  },[])
}

export default useUpcomingMovies;