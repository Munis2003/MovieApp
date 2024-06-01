import React from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from './utils/Constant'

const SideNav = () => {
    return (
    <>
    <div className ='w-[100%] p-6 border-r-[1px] border-zinc-600 '>
        <img className='w-[90px]' src="/images/logo.png" alt="" />
        
        <nav className='menu text-zinc-100 mt-7 flex flex-col'>
        <h1 className='uppercase font-semibold text-[15px] mb-4'>menu</h1>
        <Link to='/' className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-4 pl-0'> <i className="ri-home-5-fill"></i>Explore</Link>
        <Link to='/movies' className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-4 pl-0 '><i className="ri-play-fill"></i>Movies</Link>
        <Link className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-4 pl-0 '><i className="ri-tv-2-fill"></i>TV Shows</Link>
        <Link className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-4 pl-0 '><i className="ri-group-fill"></i>People</Link>
        </nav>

        <nav className='menu text-zinc-100 mt-7 flex flex-col border-t-[1px] border-zinc-600'>
        <h1 className='uppercase font-semibold text-[15px] mt-7 mb-4'>misc</h1>
        <Link className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-3 pl-0'> <i className="ri-information-fill"></i>About Us</Link>
        <Link className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-3 pl-0' ><i className="ri-customer-service-fill"></i>Contact Us</Link>
        <Link className='text-[17px] text-zinc-400 hover:text-white hover:font-semibold p-3 pl-0' ><i className="ri-customer-service-fill"></i>Chat Gpt</Link>

        </nav>
    </div>
    </>
  )
}

export default SideNav