import React from 'react';
import { mostActiveUsers, aboutLinks } from './Data'; // Import the data

export const Links = () => {
  return (
    <div className="w-full md:w-1/5 bg-gray-100 text-gray-900 p-4 md:h-fit">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-center">Most Active Users</h3>
        {mostActiveUsers.map((user, index) => (
          <div key={index} className='text-center mt-2'>
            <img src={user.image} className='h-9 w-9 m-auto rounded-full' alt={user.name} />
            <div>
              <h1>{user.name}</h1>
              <span className='text-gray-500'>{user.role}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-4 mt-6">
        <h1 className='text-gray-500'>
          {aboutLinks.join(' * ')}
        </h1>
      </div>
    </div>
  );
};

export default Links;
