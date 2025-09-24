import React, { useEffect, useState } from 'react'
import { assets, propertiesData } from '../assets/assets'

const Properties = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(()=>{
    const updateCardsToShow = ()=>{
        if(window.innerWidth >= 1024){
            setCardsToShow(propertiesData.length);
        }else{
            setCardsToShow(1);
        }
    };
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return ()=>window.removeEventListener('resize', updateCardsToShow);
  },[])

  const nextProject = ()=>{
    setCurrentIndex((prevIndex)=>(prevIndex+1) % propertiesData.length)
  }
  const prevProject = ()=>{
    setCurrentIndex((prevIndex)=> prevIndex === 0 ? propertiesData.length -1 : prevIndex-1)
  }

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Properties'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Properties</h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Click to learn more and see additional pictures</p>

      {/* slider buttons */}
      
      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous House'>
            <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next House'>
            <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
    
      {/* Property slider container */}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
            {propertiesData.map((property, index)=>(
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                    <img src={property.image} alt={property.address} className='w-full h-auto mb-14' />
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold text-gray-800'>
                                {property.address}
                            </h2>
                            <p className='text-gray-500 text-sm'>
                                {property.bedrooms} Bedrooms
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  )
}

export default Properties
