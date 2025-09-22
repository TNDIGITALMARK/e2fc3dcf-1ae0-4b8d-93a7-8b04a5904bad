'use client';

import { Category } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface CategoryPillsProps {
  categories: Category[];
  onCategorySelect?: (categoryId: string | null) => void;
}

export function CategoryPills({ categories, onCategorySelect }: CategoryPillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    onCategorySelect?.(categoryId);
  };

  const getCategoryIcon = (categoryId: string) => {
    const icons = {
      'toys': '🧸',
      'furniture': '🛏️',
      'apparel': '👕',
      'food': '🍖',
      'grooming': '✂️',
      'decor': '🖼️'
    };
    return icons[categoryId as keyof typeof icons] || '🐾';
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {/* All Categories button */}
      <Button
        variant={selectedCategory === null ? 'default' : 'outline'}
        onClick={() => handleCategoryClick(null)}
        className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
          selectedCategory === null
            ? 'bg-cat-purple hover:bg-cat-purple/90 text-white'
            : 'border-cat-purple text-cat-purple hover:bg-cat-purple-light'
        }`}
      >
        <span className="mr-2">🐾</span>
        All Categories
      </Button>

      {/* Category buttons */}
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'default' : 'outline'}
          onClick={() => handleCategoryClick(category.id)}
          className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-cat-purple hover:bg-cat-purple/90 text-white'
              : 'border-cat-purple text-cat-purple hover:bg-cat-purple-light'
          }`}
        >
          <span className="mr-2">{getCategoryIcon(category.id)}</span>
          {category.name}
        </Button>
      ))}
    </div>
  );
}