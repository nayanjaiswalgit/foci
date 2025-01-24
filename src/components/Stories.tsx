import React from 'react';
import { Plus } from 'lucide-react';

interface Story {
  id: string;
  username: string;
  avatar: string;
  isUser?: boolean;
}

interface StoriesProps {
  stories: Story[];
}

export function Stories({ stories }: StoriesProps) {
  return (
    <div className="bg-white border-b">
      <div className="overflow-x-auto">
        <div className="flex p-4 space-x-4">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center space-y-1">
              <div className={`w-16 h-16 rounded-full p-[2px] ${
                story.isUser ? 'bg-gray-200' : 'bg-gradient-to-tr from-yellow-400 to-pink-500'
              }`}>
                <div className="bg-white p-[2px] rounded-full h-full">
                  <div className="relative w-full h-full">
                    <img
                      src={story.avatar}
                      alt={story.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                    {story.isUser && (
                      <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <span className="text-xs truncate w-16 text-center">
                {story.username}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}