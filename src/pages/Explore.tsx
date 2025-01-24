import React, { useState } from 'react';
import { Search } from 'lucide-react';

const EXPLORE_POSTS = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=800&h=800&fit=crop',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=800&fit=crop',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&h=800&fit=crop',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=800&h=800&fit=crop',
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&h=800&fit=crop',
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1682687218147-9806132dc697?w=800&h=800&fit=crop',
  },
];

export function Explore() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="sticky top-14 bg-gray-50 pt-4 pb-2 z-40">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search photos, people, or places"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 mt-4">
        {EXPLORE_POSTS.map((post) => (
          <div key={post.id} className="relative pb-[100%]">
            <img
              src={post.imageUrl}
              alt="Explore post"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}