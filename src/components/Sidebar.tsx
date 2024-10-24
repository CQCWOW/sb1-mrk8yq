import React from 'react';
import { Menu, Users, Coffee, ShoppingCart, Calendar, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Menu, href: '/' },
  { name: 'Users', icon: Users, href: '/users' },
  { name: 'Menu', icon: Coffee, href: '/menu' },
  { name: 'Orders', icon: ShoppingCart, href: '/orders' },
  { name: 'Schedule', icon: Calendar, href: '/schedule' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto bg-gray-900 px-6">
        <div className="flex h-16 flex-shrink-0 items-center">
          <h1 className="text-2xl font-bold text-white">RestaurantOS</h1>
        </div>
        <nav className="mt-8 flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <item.icon className="h-6 w-6 shrink-0" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}