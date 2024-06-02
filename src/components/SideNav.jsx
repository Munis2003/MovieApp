import React from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from './utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { toggleGptSearch } from './utils/gptSlice'
import { RiOpenaiFill } from "react-icons/ri";


const SideNav = () => {
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
  const dispatch = useDispatch()
  const handleGptSearch = () =>{
    dispatch(toggleGptSearch())
  }

  
    return (
    <>
    <div className ='w-[100%] p-6 border-r-[1px] border-zinc-600 '>
        <img className='w-[90px]' src="/images/logo.png" alt="" />
        
        <nav className='menu text-zinc-100 mt-7 flex flex-col'>
        <h1 className='uppercase font-semibold text-[15px] mb-4'>menu</h1>
        <Link to='/' className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-4 pl-0'> <i className="ri-home-5-fill mr-[4.8%]"></i>Explore</Link>
        <Link to='/movies' className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-4 pl-0 '><i className="ri-play-fill mr-[4.8%]"></i>Movies</Link>
        <Link className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-4 pl-0 '><i className="ri-tv-2-fill mr-[4.8%]"></i>TV Shows</Link>
        <Link className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-4 pl-0 '><i className="ri-group-fill mr-[4.8%]"></i>People</Link>
        </nav>

        <nav className='menu text-zinc-100 mt-7 flex flex-col border-t-[1px] border-zinc-600'>
        <h1 className='uppercase font-semibold text-[15px] mt-7 mb-4'>misc</h1>
        <Link className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-3 pl-0'> <i className="ri-information-fill mr-[4.8%]"></i>About Us</Link>
        <Link className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-3 pl-0' ><i className="ri-customer-service-fill mr-[4.8%]"></i>Contact Us</Link>
        <div onClick={handleGptSearch} className='flex cursor-pointer items-center gap-2 pl-0 text-md text-zinc-400 hover:text-white py-2 px-[12px]  '>
        <RiOpenaiFill/>
          <p>{ showGptSearch ? 'Homepage' :'GPT Search'}</p>
        </div>
        </nav>
    </div>
    </>
  )
}

export default SideNav