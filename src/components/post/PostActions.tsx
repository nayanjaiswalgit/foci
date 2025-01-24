import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

interface PostActionsProps {
  isLiked: boolean;
  isSaved: boolean;
  onLike: () => void;
  onComment: () => void;
  onSave: () => void;
}

export function PostActions({ isLiked, isSaved, onLike, onComment, onSave }: PostActionsProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-4">
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={onLike}
        >
          <Heart 
            className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-700'}`} 
          />
        </button>
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={onComment}
        >
          <MessageCircle className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Share2 className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <button 
        className="p-2 hover:bg-gray-100 rounded-full"
        onClick={onSave}
      >
        <Bookmark 
          className={`w-6 h-6 ${isSaved ? 'text-black fill-current' : 'text-gray-700'}`} 
        />
      </button>
    </div>
  );
}