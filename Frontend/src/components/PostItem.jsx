import React from 'react';
import { FaComment, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import personImage from '../components/Assets/person.jpg'; // Add the path to your person image
import postImage from '../components/Assets/post.jpg';
import { RiMenuFoldFill } from "react-icons/ri";

const PostItem = ({ author, content, comments = [], likes = 0, date, time, subject }) => {
  // تعليقات جاهزة مسبقًا
  const predefinedComments = [
    { text: "Great post!", likes: 5, dislikes: 0, author: "John Doe", date: "2024-07-23", time: "12:00 PM", personImage: personImage },
    { text: "I totally agree with you.", likes: 3, dislikes: 1, author: "Jane Smith", date: "2024-07-23", time: "12:30 PM", personImage: personImage },
    { text: "Thanks for sharing.", likes: 2, dislikes: 0, author: "Alice Johnson", date: "2024-07-23", time: "1:00 PM", personImage: personImage }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-4xl mx-auto mt-32">
      <div className="flex items-center justify-between mb-4">
        <div className='flex items-center'>
          <img src={personImage} alt="author" className='w-12 h-12 rounded-full' />
          <div className='ml-3'>
            <h1 className='text-lg font-semibold'>John EWLDS</h1>
            <p className='text-gray-500 text-sm'>9:45 Pm - 2024/7/11</p>
          </div>
        </div>
        <RiMenuFoldFill className='text-gray-600 text-2xl hover:cursor-pointer' />
      </div>
      <h1 className='text-2xl font-bold mb-4'>Transfer</h1>
      <p className="text-gray-800 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      <img src={postImage} className='w-full rounded-lg mb-4' alt="post" />
      <div className='flex justify-between items-center border-t border-gray-200 pt-3 mt-4'>
        <div className='flex items-center text-gray-600'>
          <FaComment className='mr-2 text-xl hover:cursor-pointer' /> <span>{predefinedComments.length}</span>
        </div>
        <div className='flex items-center text-gray-600'>
          <FcLike className='mr-2 text-xl hover:cursor-pointer' /> <span>{likes}</span>
        </div>
      </div>
      <div className="mt-6">
        {predefinedComments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className='flex items-center mb-2'>
              <img src={comment.personImage} className='w-8 h-8 rounded-full' alt="commenter" />
              <div className='ml-3'>
                <p className="font-semibold">{comment.author}</p>
                <p className='text-gray-500 text-sm'>{comment.date} at {comment.time}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-2">{comment.text}</p>
            <div className="flex justify-between text-gray-600">
              <div className='flex items-center'>
                <FaThumbsUp className='mr-2 text-lg hover:cursor-pointer' /> <span>{comment.likes}</span>
              </div>
              <div className='flex items-center'>
                <FaThumbsDown className='mr-2 text-lg hover:cursor-pointer' /> <span>{comment.dislikes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a comment..."
        />
        <button
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default PostItem;
