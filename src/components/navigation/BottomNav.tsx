import React from 'react';
import { Home, Search, PlusSquare, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from './NavItem';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavItem icon={Home} to="/" label="Home" />
        <NavItem icon={Search} to="/explore" label="Explore" />
        <NavItem icon={PlusSquare} to="/create" label="Create" />
        <NavItem icon={User} to="/profile" label="Profile" />
      </div>
    </nav>
  );
}