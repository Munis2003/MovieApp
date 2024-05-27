import React from 'react'
import SignIn from './SignIn'
import Browse from './Browse'
import { Route, Routes } from 'react-router-dom'

const Body = () => {
  return (
    <div className='bg-[#121926]'>
        <Routes>
            <Route path='/' element={<SignIn/>}/> 
            <Route path='/browse' element={<Browse/>}/>
        </Routes>
        
      
    </div>
  )
}

export default Body