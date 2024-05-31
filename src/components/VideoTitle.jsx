import React from 'react'

const VideoTitle = ({title, desc, release, ratings, poster}) => {
  return (
    <div className='flex absolute aspect-video pl-8 text-white bg-gradient-to-r from-black/90'>
      {/* <img className='mt-[15%] w-[200px] h-[300px] object-cover rounded-xl' src={"https://image.tmdb.org/t/p/original/"+poster} alt="" /> */}
      <div className='mt-[25%]'>
      <h1 className='text-[2.6vw] font-semibold mb-2'>{title}</h1>
      <p className='w-[60%] text-left font-medium text-[1.15vw] mb-2'>{desc}</p>
      {/* <div className='flex items-center gap-3 mb-7'>
      <p className='font-medium text-[1.15vw]'>{release}</p>
      <p className='font-medium text-[1.15vw]'>{ratings}</p>
      </div> */}
      <button className='bg-white/20 px-16 py-2 rounded-md mt-7 '>Play</button>
      <button className=' ml-3 bg-blue-400/80 px-14 py-2 rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle