import { POSTER_CDN } from "./utils/Constant"

function Moviecard({title,movie}) {
  if(!movie) return;
    console.log(movie)
    return (
        <div className="w-">
          <div className='heading'>
            <h1 className='ml-6 mt-6 font-[450] text-2xl text-zinc-200'>{title}</h1>
          </div>
    
          <div className='w-full h-72 overflow-x-scroll overflow-hidden mt-4 mb-10'>

            
     
               <div className='w-32 flex '>
                  {movie.map((item,index)=>{
                      return (
                          <div className='relative hover:cursor-pointer min-w-44 h-64 overflow-hidden rounded-xl ml-6' key={item.id}>
                          <img className=' object-cover hover:border-[3px] rounded-xl border-zinc-200 ' src={POSTER_CDN + item.poster_path} alt="" />
                          <div className='flex items-center gap-2 absolute top-[5%] w-[25%] h-[8%] border-[1.4px] backdrop-blur-md bg-black/40...  left-[5%] pl-1 rounded-md  text-[10px] font-[500] text-white'><h1>{item.vote_average.toFixed(1)}</h1><i className="ri-star-fill text-yellow-400"></i ></div>
                          <div className='flex items-center justify-center absolute top-[5%] w-[25%] h-[8%] border-[1.4px] backdrop-blur-md bg-black/40...  left-[70%] rounded-md  text-[10px] font-[500] text-white'><h1>{item.release_date.slice(0,4)}</h1></div>
                        </div>
                      )
                  })}    
              </div>
          </div>
    
          </div>
      )
}

export default Moviecard



// {/* <div className='relative hover:cursor-pointer min-w-44 h-full overflow-hidden rounded-xl'>
// <div>
//     {movie.poster_path === null ? <img className='object-cover hover:border-[3px] rounded-xl border-zinc-200' src={noimage} /> :
//         <LazyLoadImage effect='blur' className='object-cover hover:border-[3px] rounded-xl border-zinc-200' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />}
// </div>
//     <div className='flex items-center gap-2 absolute top-[5%] w-[20%] h-[6%] border-[1.4px] backdrop-blur-md bg-white/90...  left-[5%] pl-1 rounded-md  text-[10px] font-[500] text-white'><h1>{movie.vote_average.toFixed(1)}</h1><i className="ri-star-fill text-yellow-400"></i ></div>
//     <div className='flex items-center justify-center absolute top-[5%] w-[20%] h-[6%] border-[1.4px] backdrop-blur-md bg-white/90...  left-[70%] rounded-md  text-[10px] font-[500] text-white'><h1>{movie.release_date.slice(0,4)}</h1></div>
//   </div> */}
