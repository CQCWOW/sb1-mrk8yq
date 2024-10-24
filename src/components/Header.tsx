import React from 'react';
import { Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-x-4">
          <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
        </div>
        <div className="flex items-center gap-x-4">
          <button className="relative rounded-full bg-gray-100 p-2 hover:bg-gray-200">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </button>
          <button className="flex items-center gap-x-2 rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200">
            <User className="h-6 w-6 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
}