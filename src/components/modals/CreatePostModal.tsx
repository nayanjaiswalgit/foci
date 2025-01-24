import React, { useState } from 'react';
import { X, Image, MapPin, Tag, Lock, Globe } from 'lucide-react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const [privacy, setPrivacy] = useState<'public' | 'private'>('public');
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg">
        <div className="border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Create New Post</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Image className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">Drag photos and videos here</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Select from computer
            </button>
          </div>

          <div className="space-y-4">
            <textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />

            <div className="flex items-center space-x-2 p-2 border rounded-lg">
              <MapPin className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Add location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPrivacy('public')}
                className={`flex items-center space-x-2 p-2 rounded-lg ${
                  privacy === 'public' ? 'bg-blue-50 text-blue-500' : 'text-gray-500'
                }`}
              >
                <Globe className="w-5 h-5" />
                <span>Public</span>
              </button>
              <button
                onClick={() => setPrivacy('private')}
                className={`flex items-center space-x-2 p-2 rounded-lg ${
                  privacy === 'private' ? 'bg-blue-50 text-blue-500' : 'text-gray-500'
                }`}
              >
                <Lock className="w-5 h-5" />
                <span>Private</span>
              </button>
            </div>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}