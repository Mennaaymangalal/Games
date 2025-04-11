import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Mmorpg() {

 const [Games , setGames] = useState(null)
  
  function getmmorpg(){
    axios.get( 'https://free-to-play-games-database.p.rapidapi.com/api/games',{
      headers:{
        'x-rapidapi-key': 'bb1c632491msh70733ae51066a60p18df66jsn95e7a4daa167',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'    
      }
    }).then((res)=>(
      setGames(res.data)       
    )).catch((err)=>(
      console.log(err)
    ))
  }

  useEffect(()=>{
    getmmorpg();
  },[])

  return (
    <>    
      <div className=" w-full flex justify-center items-center min-h-screen mt-8 xl:mt-14-0 px-2 sm:px-6 lg:px-16">
      <div className="w-full mx-auto">
        {/* Grid layout */}
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

          {/* CARD 1 */}
      {
        Games?.map((game , index)=>{
          return <div key={index} className="group transition-transform duration-300 hover:scale-105">
          <div className="p-4 flex flex-col overflow-hidden rounded-xl bg-transparent border-1 border-gray-700  shadow-md">
              <div className="relative overflow-hidden">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-auto object-cover rounded-t-md"
                />
              </div>
              <div className="pt-6">
                <div className="flex justify-between align-middle">
                  <div className="">
                 <p className='line-clamp-1  text-sm'>{game.title}</p>
                  </div>
                  <div className="">
                  <button className='bg-[#3A497B] py-1 px-2 text-sm rounded-lg font-semibold'>Free</button>
                  </div>
                </div>
               <div className="h-28 ">
               <p className="mt-3 text-sm text-center md:text-lg text-gray-400 line-clamp-3">
                 {game.short_description}
                </p>
               </div>
              </div>
  
              <div className="border-t-1 border-gray-700 flex items-center justify-between pt-2 ">
                <div className="flex items-center -space-x-3">
                <button className='bg-[#32383e] p-1 rounded-xl text-tiny font-semibold'>{game.genre}</button>
               
                </div>
                <button className='bg-[#32383e] p-1 rounded-xl text-tiny font-semibold'>{game.platform}</button>
              </div>
            </div>
          </div>
        })
      }
         
       </div>
      </div>
    </div>
    </>
  )
}
