import { API_Options } from '../components/utils/Constant'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addTopRatedMovies} from '../components/utils/MovieSlice'


const useTopRatedMovies = () =>{
    const dispatch =  useDispatch()
  const gettopratedmovies = async () =>{
   const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_Options)
   const json = await data.json()
   
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(()=>{
    gettopratedmovies();
  },[])
}

export default useTopRatedMovies;