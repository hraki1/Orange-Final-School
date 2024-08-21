import React, { useState } from 'react';
import { FaSearch, FaBell, FaLightbulb, FaVideo, FaRegComment } from "react-icons/fa";
import { IoPerson, IoMenu, IoHome } from "react-icons/io5";

import { RiGalleryUploadFill, RiMessage3Fill, RiMenuFoldFill } from "react-icons/ri";




const LeftSidebar = ({ isAddSubjectOpen, setIsAddSubjectOpen }) => {
  return (
    <div className='col-span-1 p-4 h-[84vh] bg-white mt-2 hidden md:block'>
          {/* Left Section: Menu */}
          <h2 className='text-xl font-bold mb-4 text-primary'>Menu</h2>
          <ul>
            <li className='mb-2'><IoHome className='inline mr-2' /> Home</li>
            <li className='mb-2'><IoPerson className='inline mr-2' /> Profile</li>
            <li className='mb-2'><FaBell className='inline mr-2' /> Notice</li>
            <li className='mb-2 pb-2 border-b border-solid-1 '><FaLightbulb className='inline mr-2' /> Ideas</li>
            <li className='mb-2'><RiGalleryUploadFill className='inline mr-2' /> Gallery</li>
            <li className='mb-2'><FaVideo className='inline mr-2' /> Video</li>
            <li className='mb-2'><RiMessage3Fill className='inline mr-2' /> Message</li>
          </ul>
        </div>
  );
};

export default LeftSidebar;
