import React from 'react';
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { latestPosts } from './Data';

const LastestPost = () => {
  return (
    <div className='border-t border-solid mt-6 pt-6 pb-6'>
      <h1 className='font-bold text-2xl'>Latest Posts</h1>
      {latestPosts.map((post, index) => (
        <div key={index} className='bg-gray-50 mt-5 p-2'>
          <h1 className='font-medium text-xl'>{post.title}</h1>
          <p className='text-gray-600 mt-1'>{post.content}</p>

          <div className='flex justify-start mt-2'>
            <div className='flex items-center'>
              <FcLike className='text-2xl' />
              <h1 className='ml-1'>{post.likes}</h1>
            </div>

            <div className='flex items-center ml-3'>
              <FaComment className='text-xl text-primary' />
              <h1 className='ml-1'>{post.comments}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastestPost;
