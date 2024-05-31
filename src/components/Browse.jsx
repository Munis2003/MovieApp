import SideNav from './SideNav'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'

const Browse = () => {
  useNowPlayingMovies()
  return ( 
    <>
    <div className='flex'>
      <SideNav/>
      <div className='flex flex-col w-screen'>
      {/* <Header/> */}
      <MainContainer/>
      </div>
    </div>
    </>
  )
}

export default Browse