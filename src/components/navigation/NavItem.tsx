import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  to: string;
  label: string;
}

export function NavItem({ icon: Icon, to, label }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} className="flex flex-col items-center">
      <Icon 
        className={`w-6 h-6 ${isActive ? 'text-blue-500' : 'text-gray-500'}`} 
      />
      <span className={`text-xs mt-1 ${isActive ? 'text-blue-500' : 'text-gray-500'}`}>
        {label}
      </span>
    </Link>
  );
}