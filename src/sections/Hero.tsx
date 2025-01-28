
import React  from 'react'

//import './hero.css'
export default function Hero() {
  return (
    <div className="relative flex my-10 object-center  max-w-xl mx-auto">
      <div className=''>
      <img className="  h-12 w-60 rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image"/>
    </div>
    <div className="inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div className="">
        <h2 className="absolute text-white text-3xl font-bold m-0">Get Lost in Mountains</h2>
    </div>
</div>  

  )
}
