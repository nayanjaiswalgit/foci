import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { PostOptionsModal } from './PostOptionsModal';

interface PostHeaderProps {
  username: string;
  location?: string;
  userAvatar: string;
  isOwnPost?: boolean;
}

export function PostHeader({ username, location, userAvatar, isOwnPost = false }: PostHeaderProps) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={userAvatar} 
            alt={username} 
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{username}</h3>
            {location && (
              <p className="text-xs text-gray-500">{location}</p>
            )}
          </div>
        </div>
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={() => setShowOptions(true)}
        >
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <PostOptionsModal 
        isOpen={showOptions}
        onClose={() => setShowOptions(false)}
        isOwnPost={isOwnPost}
      />
    </>
  );
}