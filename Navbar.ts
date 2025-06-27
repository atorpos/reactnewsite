// src/components/Navbar.tsx
import React, { useState } from ‘react’;
import { NavbarProps, NavItem } from ‘../types’;

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

const navItems: NavItem[] = [
{ id: ‘home’, label: ‘Home’ },
{ id: ‘about’, label: ‘About’ },
{ id: ‘services’, label: ‘Services’ },
{ id: ‘contact’, label: ‘Contact’ }
];

const handleNavClick = (pageId: string): void => {
setCurrentPage(pageId);
setIsMobileMenuOpen(false);
};

return (
<nav className="bg-white shadow-lg sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4">
<div className="flex justify-between items-center py-4">
{/* Logo */}
<button
onClick={() => handleNavClick(‘home’)}
className=“text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors”
>
TypeScript Site
</button>

```
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === item.id
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-indigo-600 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    
    {/* Mobile menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                currentPage === item.id
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>
```

);
};

export default Navbar;
