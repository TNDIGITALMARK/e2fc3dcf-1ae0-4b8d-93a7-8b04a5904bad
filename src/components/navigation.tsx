'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount] = useState(0); // This will be connected to cart state later

  const navigationItems = [
    { label: 'Food', href: '/categories/food' },
    { label: 'Toys', href: '/categories/toys' },
    { label: 'Accessories', href: '/categories/furniture' },
    { label: 'Care', href: '/categories/grooming' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl">🐾</span>
              <span className="font-pacifico text-2xl text-cat-purple ml-2">
                Purrfect Paws
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-cat-purple font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for cat products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cat-purple focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search icon (mobile) */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-600 hover:text-cat-purple"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-gray-600 hover:text-cat-purple relative"
            >
              <Heart className="w-5 h-5" />
            </Button>

            {/* Account */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-gray-600 hover:text-cat-purple"
            >
              <User className="w-5 h-5" />
            </Button>

            {/* Shopping Cart */}
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-cat-purple relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cat-teal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for cat products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cat-purple focus:border-transparent"
                />
              </div>

              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-cat-purple font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <Link href="/account" className="text-gray-600 hover:text-cat-purple">
                  <User className="w-5 h-5" />
                </Link>
                <Link href="/wishlist" className="text-gray-600 hover:text-cat-purple">
                  <Heart className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}