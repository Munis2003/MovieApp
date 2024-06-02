import React from 'react'
import { RiOpenaiFill } from "react-icons/ri";
import { SUPPORTED_LANG } from './utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from './utils/configSlice';
import { languages } from './utils/languageConstants';


const GptSearchBar = () => {
    
    const langKey = useSelector((store) => store.lang.changeLang)
   
    const dispatch = useDispatch()
    const handleLang = (e) =>{
        dispatch(changeLanguage(e.target.value))
    }
    // 
    // console.log(langKey);

  
  return (
    <>
        <nav className='flex w-[96%] h-16 mb-10 ml-7'>
    <div className='w-[50%] mt-6 bg-zinc-800 p-1 py-2 rounded-xl flex items-center justify-between '>
    <input className=' bg-transparent w-[100%] text-sm outline-none text-zinc-400 placeholder:text-zinc-400 pl-3 ' 
     type="text"
     name="searchpanel"
     id="searchpanel"
     placeholder={languages[langKey].gptPlaceholder}
     />
    <i className="ri-search-line text-zinc-400 mr-3" ></i> 
    </div>
    
    <div className='flex items-center mr-14'>
    <p className='text-zinc-400 text-sm font-medium mr-7 flex mt-6'></p>
    <div className='flex hover:text-white cursor-pointer items-center gap-3 text-md text-zinc-400 mt-6 py-2 px-4 bg-zinc-800 rounded-md mr-3'>
      <RiOpenaiFill />
      <p className='text-sm'>{languages[langKey].search}</p>
    </div>
    <select onChange={handleLang} className='bg-zinc-800 rounded-md hover:text-white py-2 text-sm outline-none px-3 mt-6 text-zinc-400'>
        {SUPPORTED_LANG.map(lang=> <option key={lang.identifier } value={lang.identifier}>{lang.name}</option>)}
    </select>
    {/* <i className="flex items-center ri-logout-circle-r-line text-lg text-zinc-400 mt-6 py-2 px-[12px] bg-zinc-800 rounded-xl mr-3"></i>
    <i className="flex items-center ri-moon-fill mt-6 py-2 px-[12px] text-lg bg-zinc-800 text-yellow-400 rounded-xl"></i> */}
    </div>

    
      </nav>
    </>
  )
}

export default GptSearchBar




// <div className='pt-[5%] flex justify-center'>
// <form className='w-1/2 grid grid-cols-12'>
// <input className=' col-span-9 p-4 m-4 rounded-lg outline-none bg-zinc-800 ' 
//  type="text"
//  name="searchpanel"
//  id="searchpanel"
//  placeholder='What would you like to watch today?'
//  />
//  <button className='col-span-3 m-4 py-2 bg-red-300 rounded-lg'>Search</button>
// </form>
// </div>