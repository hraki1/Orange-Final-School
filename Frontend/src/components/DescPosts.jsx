import React from 'react'
import person from './Assets/person.jpg'; // Import the image
import image from './Assets/image.png'; // Import the image
import { FaCheckCircle } from "react-icons/fa";

export const DescPosts = () => {
  return (
    <div className='mt-20 w-[70%] m-auto shadow-lg bg-white rounded-lg overflow-hidden'>
      <div className='flex justify-between items-center py-6 px-8 border-b'>
        <div className='flex items-center'>
          <img src={person} alt="Profile" className='w-16 h-16 rounded-full' />
          <div className='ml-4'>
            <h1 className='font-bold text-xl text-gray-900'>Mohammed Ali</h1>
            <h1 className='text-gray-400'>2 Hours ago</h1>
          </div>
        </div>
        <div>
          <h1 className='text-gray-400'>{new Date().toLocaleDateString()}</h1>
        </div>
      </div>
      
      <div className='px-8 py-6'>
        <h1 className='font-bold text-2xl text-gray-900'>Transfer</h1>
        <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis debitis modi enim recusandae error?</p>
      </div>
      
      <img src={image} alt="Content" className='w-full h-96 object-cover' />
      
      {[...Array(3)].map((_, index) => (
        <div key={index} className='px-8 py-6 border-t'>
          <div className='flex items-center mb-4'>
            <img src={person} alt="Profile" className='w-12 h-12 rounded-full' />
            <div className='ml-4'>
              <h1 className='font-bold text-lg text-gray-900'>Mohammed Ali</h1>
              <h1 className='text-gray-400'>2 Hours ago</h1>
            </div>
          </div>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestias ipsam distinctio laborum voluptas at repudiandae provident modi doloribus? Voluptatibus in nihil facere eveniet! Tempora velit est, eos, ex tenetur dolores ullam voluptatibus sint nulla, ipsam quae. Perferendis, enim! Voluptates?</p>
          <div className='flex items-center mt-4'>
            <FaCheckCircle className='text-green-500 text-xl mr-2 cursor-pointer'/>
            <span className='text-gray-700'>24</span>
          </div>
        </div>
      ))}
    </div>
  )
}
