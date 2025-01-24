import React from 'react';
import { Heart } from 'lucide-react';
import { BottomNav } from './navigation/BottomNav';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-xl font-bold">Photoshare</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-14 pb-16">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}