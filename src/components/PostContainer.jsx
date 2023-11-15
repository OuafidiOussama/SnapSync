import React from 'react';
import PostCard from './PostCard';

export const PostContainer = () => {
  return (
    <div className="flex flex-wrap">
    <PostCard className="w-full" />
    <PostCard className="w-full" />
  </div>
  );  
}
