'use client'
import Link from 'next/link'
import React, { useState} from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    console.log(isMenuOpen)
  return (     
        <nav className=' bg-white p-3  mx-auto fixed shadow rounded w-full z-10  '>
             <div className="flex  items-center mx-auto  justify-between  ">
                <Link href="/" className=' '>
                        <img src='./assets/img/hit.png' alt='hit' />
                    </Link> 
            <div className='md:hidden'>
                <button className='black' onClick={toggleMenu}>
                    <svg 
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className='w-6 h-6'
                    >
                        <path d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>

                </button>
            </div>
           {/* --Menu Items ---*/}
            <div className='hidden md:flex  '>
                   <ul className='container space-x-6 '>
                    <a href="/" className='hover:text-color-orange cursor-pointer duration-300 '>Home</a>
                    <a href="/about" className='hover:text-color-orange cursor-pointer duration-300 '>About</a>
                    <a href="/products" className='hover:text-color-orangee cursor-pointer duration-300 '>Products</a>
                    <a href="/services" className='hover:text-color-orange cursor-pointer duration-300 '>Services</a>
                    <a href="/consulting" className='hover:text-color-orange cursor-pointer duration-300 '>Consulting</a>
                    <a href="/contact" className='hover:text-color-orange cursor-pointer duration-300 '>Contact</a>
                    </ul>
            </div>
           
        </div>
        {/* Mobile Menu*/}
        {isMenuOpen ? (
             <ul className='md:hidden  relative h-32 w-32 z-30'>
              <div className="absolute inset-y-0 right-0 w-16">
                        
                        <li className='py-1 '><a href="/" className='text-black'>Home</a></li>
                        <li className='py-1'><a href="about" className='text-black'>About</a></li>
                        <li className='py-1'><a href="products" className='text-black'>Products</a></li>
                        <li className='py-1'><a href="services" className='text-black'>Services</a></li>
                        <li className='py-1'><a href="consulting" className='text-black'>Consulting</a></li>
                        <li className='py-1'><a href="contact" className='text-black'>Contact</a></li>
                </div>
             
         </ul>
        ) : null}
        
    </nav>


    
  )
}
