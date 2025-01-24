import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Comment {
  id: string;
  username: string;
  text: string;
  timeAgo: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

export function CommentSection({ comments }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    setNewComment('');
  };

  return (
    <div className="px-4 py-2">
      <div className="space-y-2 mb-4">
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>
              <span className="font-semibold mr-2">{comment.username}</span>
              {comment.text}
            </p>
            <p className="text-gray-500 text-xs">{comment.timeAgo}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          disabled={!newComment.trim()}
          className="ml-2 disabled:opacity-50"
        >
          <Send className="w-5 h-5 text-blue-500" />
        </button>
      </form>
    </div>
  );
}