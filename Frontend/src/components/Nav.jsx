import React from 'react';
import {navItems} from './Data'; // Import the navItems array

const Nav = () => {
  return (
    <div className="w-full md:w-1/6 bg-gray-800 text-white p-4 md:h-fit">
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className="mb-4 flex items-center border-b border-white pb-2 hover:cursor-pointer hover:bg-gray-700 transition-colors">
            <item.icon className='mr-3' /> {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav;
