import React from 'react'
import { FaBalanceScale,FaUserEdit  } from "react-icons/fa";

export const Description = () => {
  return (
    <div>
         <div className='mt-36 flex flex-col md:flex-row justify-center items-center text-center md:text-left '>
        <div className='text-white md:w-[70%] md:ml-[100px]'>
          <h1 className='text-4xl font-bold'>You do the questions <br /> we will answer</h1>
          <p className='w-[70%] text-xl mx-auto md:mx-0  md:mt-4 text-gray-300'>Our goal is to foster peer-to-peer learning and community support, helping students with coursework, exam preparation, and academic advice.</p>
          <button className='px-8 py-3 mt-8 bg-primary text-black rounded hover:bg-white transition-all duration-300'>Get Started</button>
        </div>
        <div className='h-24'>
      <div className='text-white flex justify-center items-center mt-20 md:mt-0'>
        <div className='flex items-center overflow-hidden h-full'>
          <div className='flex flex-col h-40 animate-loop-scroll-y text-center md:text-left'>
          
                <div className='w-full flex md:justify-start justify-center items-center mt-7'>
                  <FaBalanceScale className='text-2xl text-primary' />
                  <h1 className='text-2xl ml-3 text-center '>Faculty of Rights</h1>
                </div>
                <p className='mt-2 text-gray-300'>
                  You can send any question to be answered
                </p>


                <div className='w-full flex md:justify-start justify-center  items-center mt-7'>
                  <FaBalanceScale className='text-2xl text-primary' />
                  <h1 className='text-2xl ml-3'>Faculty of Business</h1>
                </div>
                <p className='mt-2 text-gray-300'>
                  You can send any question to be answered
                </p>

                <div className='w-full flex md:justify-start justify-center  items-center mt-7'>
                  <FaBalanceScale className='text-2xl text-primary' />
                  <h1 className='text-2xl ml-3'>Faculty of Engineering</h1>
                </div>
                <p className='mt-2 text-gray-300'>
                  You can send any question to be answered
                </p>
              
                <div className='w-full flex  md:justify-start justify-center   mt-7'>
                  <FaBalanceScale className='text-2xl text-primary' />
                  <h1 className='text-2xl ml-3'>Faculty of Arts and Sciences</h1>
                </div>
                <p className='mt-2 text-gray-300'>
                  You can send any question to be answered
                </p>
                <div className='w-full flex md:justify-start justify-center items-center mt-7'>
                  <FaBalanceScale className='text-2xl text-primary' />
                  <h1 className='text-2xl ml-3'>Faculty of Pharmacy</h1>
                </div>
                <p className='mt-2 text-gray-300'>
                  You can send any question to be answered
                </p>
                <div className='w-full flex md:justify-start justify-center items-center mt-7'>
                  <FaBalanceScale className='text-2xl text-primary' />
                  <h1 className='text-2xl ml-3'>Faculty of Sharia</h1>
                </div>
                <p className='mt-2 text-gray-300'>
                  You can send any question to be answered
                </p>
            
          
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
