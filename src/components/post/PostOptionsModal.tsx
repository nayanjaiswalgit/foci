import React from 'react';
import { X, Flag, UserMinus, Link2, Trash2 } from 'lucide-react';

interface PostOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isOwnPost: boolean;
}

export function PostOptionsModal({ isOpen, onClose, isOwnPost }: PostOptionsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-sm overflow-hidden">
        {isOwnPost ? (
          <>
            <button className="w-full p-4 text-red-500 font-semibold border-b hover:bg-gray-50 flex items-center justify-center space-x-2">
              <Trash2 className="w-5 h-5" />
              <span>Delete post</span>
            </button>
            <button className="w-full p-4 border-b hover:bg-gray-50 flex items-center justify-center space-x-2">
              <Link2 className="w-5 h-5" />
              <span>Copy link</span>
            </button>
          </>
        ) : (
          <>
            <button className="w-full p-4 text-red-500 font-semibold border-b hover:bg-gray-50 flex items-center justify-center space-x-2">
              <Flag className="w-5 h-5" />
              <span>Report</span>
            </button>
            <button className="w-full p-4 text-red-500 font-semibold border-b hover:bg-gray-50 flex items-center justify-center space-x-2">
              <UserMinus className="w-5 h-5" />
              <span>Unfollow</span>
            </button>
          </>
        )}
        <button onClick={onClose} className="w-full p-4 hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </div>
  );
}