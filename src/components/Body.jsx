import React, { useEffect } from 'react'
import SignIn from './SignIn'
import Browse from './Browse'
import { Route, Routes } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';

const Body = () => {
  const dispatch = useDispatch()
  

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName} = user;
        dispatch(addUser({uid:uid , email:email, displayName:displayName}))
      } else {
        dispatch(removeUser())
      }
    });
  },[])
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