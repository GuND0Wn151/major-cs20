import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ShowPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend API
    axios.get('/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {posts.map(post => (
        <div key={post.id} className="bg-white w-full max-w-md rounded-lg shadow-lg p-4 my-4">
          <div className="flex items-center mb-2">
            <img src={post.author.profilePic} alt={post.author.name} className="w-10 h-10 rounded-full mr-2" />
            <div>
              <div className="text-sm font-semibold">{post.author.name}</div>
              <div className="text-xs text-gray-600">{post.createdAt}</div>
            </div>
          </div>
          <div className="text-base text-gray-800">{post.content}</div>
          <div className="mt-2 flex items-center">
            <button className="flex items-center justify-center px-4 py-2 text-white font-medium bg-blue-500 rounded-md mr-2">
              <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20">
                <path d="M9.707 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 9H3a1 1 0 0 1 0-2h9.586l-2.293-2.293a1 1 0 0 1 0-1.414z"/>
              </svg>
              <span>Reply</span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 text-blue-500 font-medium rounded-md">
              <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM9 6a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0V6z"/>
              </svg>
              <span>Like</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowPost;