import SideNav from './SideNav'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  return ( 
    <>
    <div className='flex'>
      <div className='w-[20%]'>
      <SideNav/>
      </div>
      <div className='flex flex-col w-screen'>

      {showGptSearch ? 
      ( <GptSearch/> ) : (<>
        {/* <Header/> */}
        <MainContainer/>
        <SecondaryContainer/>
      </>)}
     
    
      </div>
    </div>
    </>
  )
}

export default Browse