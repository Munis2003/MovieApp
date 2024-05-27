import React, { useState } from 'react'

const SignIn = () => {
    const[isSignIn,setIsSignIn] = useState(true)
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }
  return (
    <div className='bg-[#121926] w-full h-screen'>
     {/* ---------------------Header---------------------------- */}
    <div className='max-w-screen-lg pt-9 mx-auto'>
        <img className='w-[100px]' src="/images/logo.png" alt="" />
    </div>

    <form className='max-w-screen-lg ml-[10.1%] w-[30%] flex flex-col p-4 absolute top-[53%] left-[13.8%] translate-x-[-50%] translate-y-[-50%] ' action="">
        <h1 className='text-center text-3xl mb-5 font-[poppins] font-medium text-white'>{isSignIn ? 'Welcome to SMWZ' : 'Become Our Member'}</h1>
        {!isSignIn && <input type="name" placeholder='Full Name' className='p-2 my-2 w-full outline-none text-white text-sm rounded-md bg-[#202939] border-[1.9px] border-[#364152]' /> }
        <input type="email" placeholder='Email' className='p-2 my-2 w-full outline-none text-white text-sm rounded-md bg-[#202939] border-[1.9px] border-[#364152]' />
        <input type="passoword" placeholder='Password' className='p-2 my-2 outline-none text-white w-full text-sm rounded-md bg-[#202939] border-[1.9px] border-[#364152]' />
        <button className='mt-5 p-2 bg-[#f37615] text-white text-sm w-full rounded-md'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className='text-white mt-7 text-sm text-center'>{isSignIn ? `Don't have an account?` : `Already have an account?`} <span onClick={toggleSignIn}  className='text-[#f37615] cursor-pointer'>{isSignIn ? 'Sign Up' : 'Sign In'}</span> </p>
    </form>


    


    </div>
    )
}
export default SignIn