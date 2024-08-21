import React from 'react';
import PostItem from './PostItem'; // Import the PostItem component
import { posts } from './Data'; // Import the posts data

export const Post = () => {
  return (
    <div className="flex-1 p-4">
      <h1 className='font-bold text-2xl mb-4'>Threads</h1>
      <div className="bg-white shadow-md rounded p-6 mb-4 flex items-center">
        <img src={posts[0].personImage} alt="" className='h-9 w-9 ml-4 rounded-full' />
        <input type="text" className='ml-6 border-none outline-none w-full' placeholder='Whats your Question?' />
      </div>
      {/* Render posts using PostItem component */}
      {posts.map((post, index) => (
        <PostItem
          key={index}
          personImage={post.personImage}
          postImage={post.postImage}
          author={post.author}
          date={post.date}
          time={post.time}
          subject={post.subject}
          content={post.content}
          comments={post.comments}
          likes={post.likes}
        />
      ))}
    </div>
  );
};

export default Post;
