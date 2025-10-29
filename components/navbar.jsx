import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (
    <>
        <nav className='flex justify-between items-center px-10 bg-black/90 text-white h-16 z-20 opacity-95 fixed w-full'>
            <Image src={"/images/raycode.jpg"} alt='Raycode Icon' width={40} height={40}/>
                <ul className='flex gap-20 text-lg font-medium pr-2'>
                    <a href=""><li className='hover:text-gray-300 transition-colors cursor-pointer'>Home</li></a>
                    <a href=""><li className='hover:text-gray-300 transition-colors cursor-pointer'>Projects</li></a>
                    <a href=""><li className='hover:text-gray-300 transition-colors cursor-pointer'>Contacts</li></a>
                </ul>
        </nav>
    </>
  )
}

export default Navbar