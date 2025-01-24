import React from 'react';
import { Stories } from '../components/Stories';
import { Post } from '../components/Post';

const SAMPLE_STORIES = [
  {
    id: '1',
    username: 'You',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    isUser: true
  },
  {
    id: '2',
    username: 'john_doe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: '3',
    username: 'travel_lisa',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop'
  },
  // Add more sample stories as needed
];

const SAMPLE_POSTS = [
  {
    id: '1',
    username: 'john_doe',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=800&h=800&fit=crop',
    caption: 'Beautiful sunset in the city! 🌇 #nyc #sunset',
    likes: 1234,
    timeAgo: '2 hours ago',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: '2',
    username: 'travel_lisa',
    location: 'Paris, France',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=800&fit=crop',
    caption: 'Finally made it to Paris! The Eiffel Tower is even more beautiful in person 🗼✨ #paris #travel',
    likes: 2468,
    timeAgo: '4 hours ago',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop'
  },
  // Add more sample posts as needed
];

export function Home() {
  return (
    <div className="max-w-screen-sm mx-auto">
      <Stories stories={SAMPLE_STORIES} />
      <div className="p-4">
        {SAMPLE_POSTS.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}