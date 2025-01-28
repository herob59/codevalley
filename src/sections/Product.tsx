'use client'
import React, { useState } from 'react'
import { productlist } from '@/data/data'; 

export default function Product() {
 

  return (

   
  <>
            
              <div className='relative container my-10'>
                <h2 className='text-center md:max-xl:flex ml-3 p-0 '> online shopping</h2>
                  <h3 className='text-center md:max-xl:flex ml-3 p-0 '>our store are reliable and affordable, given you the vibes that you desire</h3>
                  </div>
                <div className=' grid grid-cols-3 justify-between items-center '>
                 <img className='w-60 h-60 sm:h-48 ' src='./assets/img/macbook13pro.webp' alt=''/>
                  <h3 className='text-sm text-gray-700'>Apple Laptop </h3>
                 <div><span className='mt-1 text-sm text-gray-500'>Black</span></div>
                 <div><span className=' block text-sm font-medium text-gray-900'>$35</span></div>
              </div>            
              </>
  )
}
