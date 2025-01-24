import React, { useState } from 'react';
import { CreatePostModal } from '../components/modals/CreatePostModal';

export function Create() {
  const [showModal, setShowModal] = useState(true);

  return (
    <CreatePostModal 
      isOpen={showModal}
      onClose={() => setShowModal(false)}
    />
  );
}