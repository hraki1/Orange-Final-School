import React, { useState } from 'react';
import { FaSearch, } from "react-icons/fa";

import { RiGalleryUploadFill, RiMessage3Fill, RiMenuFoldFill } from "react-icons/ri";

import person from '../../Assets/person.jpg';



const RightSidebar = () => {
  return (
    <div className='col-span-6 md:col-span-1 p-4 h-full bg-white mt-2 hidden md:block'>
          {/* Right Section: Messages and Friend Requests */}
          <div className='mb-4'>
            <div className='flex px-2 items-center justify-between'>
              <h3 className='font-bold text-primary'>Messages</h3>
              <RiMessage3Fill />
            </div>
            <div className='flex items-center border border-solid-1 p-1 mt-2 rounded-full'>
              <FaSearch className='text-xl' />
              <input type="text" className='outline-none border-none ml-2 w-full' placeholder='Enter a name' />
            </div>
            <ul className='mt-5'>
              <li className='mb-2'>
                <div className='flex lg:items-center'>
                  <img src={person} alt="" className='w-9 h-9 rounded-full' />
                  <div className='ml-2'>
                    <h1 className='font-bold'>Mohammed </h1>
                    <p className='text-gray-400'>Lorem, ipsum dolor.</p>
                  </div>
                </div>
              </li>
              <li className='mb-2'>
                <div className='flex lg:items-center'>
                  <img src={person} alt="" className='w-9 h-9 rounded-full' />
                  <div className='ml-2'>
                    <h1 className='font-bold'>Mohammed </h1>
                    <p className='text-gray-400'>Lorem, ipsum dolor.</p>
                  </div>
                </div>
              </li>
              <li className='mb-2'>
                <div className='flex lg:items-center'>
                  <img src={person} alt="" className='w-9 h-9 rounded-full' />
                  <div className='ml-2'>
                    <h1 className='font-bold'>Mohammed </h1>
                    <p className='text-gray-400'>Lorem, ipsum dolor.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-primary'>Friend Requests</h3>
            <ul className='mt-3'>
              <li className='mb-4'>
                <div className='flex lg:items-center'>
                  <img src={person} alt="User" className='w-9 h-9 rounded-full' />
                  <div className='ml-2'>
                    <h1 className='font-bold text-gray-800'>Mohammed </h1>
                    <div className='mt-2 block  lg:flex'>
                      <button className='bg-green-500 text-white py-1 px-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:                      ring-green-500 focus:ring-opacity-50'>Accept</button>
                      <button className='bg-red-500 text-white py-1 px-2 rounded-lg ml-0 mt-1 lg:mt-0 lg:ml-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'>Delete</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className='mb-4'>
                <div className='flex lg:items-center'>
                  <img src={person} alt="User" className='w-9 h-9 rounded-full' />
                  <div className='ml-2'>
                    <h1 className='font-bold text-gray-800'>Mohammed </h1>
                    <div className='mt-2 block  lg:flex'>
                      <button className='bg-green-500 text-white py-1 px-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'>Accept</button>
                      <button className='bg-red-500 text-white py-1 px-2 rounded-lg ml-0 mt-1 lg:mt-0 lg:ml-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'>Delete</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className='mb-4'>
                <div className='flex lg:items-center'>
                  <img src={person} alt="User" className='w-9 h-9 rounded-full' />
                  <div className='ml-2'>
                    <h1 className='font-bold text-gray-800'>Mohammed </h1>
                    <div className='mt-2 block  lg:flex'>
                      <button className='bg-green-500 text-white py-1 px-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'>Accept</button>
                      <button className='bg-red-500 text-white py-1 px-2 rounded-lg ml-0 mt-1 lg:mt-0 lg:ml-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'>Delete</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

  );
};

export default RightSidebar;
