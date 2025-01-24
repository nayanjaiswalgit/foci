import React, { useState } from 'react';
import { PostHeader } from './post/PostHeader';
import { PostActions } from './post/PostActions';
import { CommentSection } from './CommentSection';

interface PostProps {
  username: string;
  location?: string;
  imageUrl: string;
  caption: string;
  likes: number;
  timeAgo: string;
  userAvatar: string;
}

export function Post({ 
  username, 
  location, 
  imageUrl, 
  caption, 
  likes, 
  timeAgo, 
  userAvatar 
}: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const sampleComments = [
    {
      id: '1',
      username: 'jane_doe',
      text: 'This is amazing! 😍',
      timeAgo: '1h'
    },
    {
      id: '2',
      username: 'photo_enthusiast',
      text: 'Great composition!',
      timeAgo: '30m'
    }
  ];

  return (
    <article className="bg-white border rounded-lg mb-6">
      <PostHeader 
        username={username}
        location={location}
        userAvatar={userAvatar}
      />

      <div className="relative pb-[100%]">
        <img 
          src={imageUrl} 
          alt="Post content"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div>
        <div className="p-4">
          <PostActions 
            isLiked={isLiked}
            isSaved={isSaved}
            onLike={() => setIsLiked(!isLiked)}
            onComment={() => setShowComments(!showComments)}
            onSave={() => setIsSaved(!isSaved)}
          />

          <p className="font-semibold mb-1">{likes.toLocaleString()} likes</p>
          <p>
            <span className="font-semibold mr-2">{username}</span>
            {caption}
          </p>
          <p className="text-gray-500 text-sm mt-2">{timeAgo}</p>
        </div>

        {showComments && <CommentSection comments={sampleComments} />}
      </div>
    </article>
  );
}