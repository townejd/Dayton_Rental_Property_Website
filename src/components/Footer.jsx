import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <p className='text-white mt-4 text-2xl font-bold'>Pierce Properties</p>
            <p className='text-gray-400 mt-4'>Patricia & Joseph Pierce</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Navigation</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a className='hover:text-white' href="#Header">Home</a>
                <a className='hover:text-white' href="#Properties">Properties</a>
            </ul>
        </div>
        <div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2025 © Pierce Properties. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
