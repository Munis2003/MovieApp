import React from 'react'
import { auth } from './utils/firebase'
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { RiOpenaiFill } from "react-icons/ri";
import { toggleGptSearch } from './utils/gptSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }

  const handleGptSearch = () =>{
    dispatch(toggleGptSearch())
  }
  
  return (
    <nav className='flex w-[96%] justify-between h-16 mb-10 ml-7'>
    <div className='w-[33%] mt-6 bg-zinc-800 p-1 py-2 rounded-md flex items-center justify-between '>
    <input className=' bg-transparent text-sm outline-none text-white placeholder:text-white pl-3 ' 
     type="text"
     name="searchpanel"
     id="searchpanel"
     placeholder='Search'
     />
    <i className="ri-search-line text-white mr-3" ></i> 
    </div>
    <div className='flex items-center mr-14'>
    <p className='text-white text-sm font-medium mr-7 flex mt-6'></p>
    <div onClick={handleGptSearch} className='flex cursor-pointer items-center gap-3 text-md text-white mt-6 py-2 px-[12px] bg-zinc-800 rounded-xl mr-3'>
      <RiOpenaiFill />
      <p>GPT Search</p>
    </div>
    <i onClick={handleSignOut} className="flex items-center ri-logout-circle-r-line text-lg text-white mt-6 py-2 px-[12px] bg-zinc-800 rounded-xl mr-3"></i>
    <i className="flex items-center ri-moon-fill mt-6 py-2 px-[12px] text-lg bg-zinc-800 text-yellow-400 rounded-xl"></i>
    </div>
      </nav>
  )
}


export default Header