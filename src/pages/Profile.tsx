import React from 'react';
import { Settings, Grid, Bookmark } from 'lucide-react';

const PROFILE_POSTS = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=800&h=800&fit=crop',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=800&fit=crop',
  },
];

export function Profile() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="px-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">@johndoe</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <p className="font-medium">Photography enthusiast 📸</p>
          <p className="text-gray-600">Capturing moments and sharing stories</p>
          <p className="text-blue-500">www.johndoe.com</p>
        </div>

        <div className="flex justify-around mb-6 text-center">
          <div>
            <div className="font-semibold">128</div>
            <div className="text-gray-500 text-sm">Posts</div>
          </div>
          <div>
            <div className="font-semibold">1,284</div>
            <div className="text-gray-500 text-sm">Followers</div>
          </div>
          <div>
            <div className="font-semibold">892</div>
            <div className="text-gray-500 text-sm">Following</div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="flex">
          <button className="flex-1 py-3 border-b-2 border-black">
            <Grid className="w-6 h-6 mx-auto" />
          </button>
          <button className="flex-1 py-3 text-gray-400">
            <Bookmark className="w-6 h-6 mx-auto" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {PROFILE_POSTS.map((post) => (
            <div key={post.id} className="relative pb-[100%]">
              <img
                src={post.imageUrl}
                alt="Profile post"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}