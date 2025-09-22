'use client';

import { products, categories } from '@/data/products';
import { ProductGrid } from '@/components/product-grid';
import { CategoryPills } from '@/components/category-pills';
import { notFound } from 'next/navigation';
import { useState } from 'react';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const categoryInfo = categories.find(c => c.id === category);

  if (!categoryInfo) {
    notFound();
  }

  return (
    <CategoryPageContent categoryId={category} categoryInfo={categoryInfo} />
  );
}

function CategoryPageContent({ categoryId, categoryInfo }: { categoryId: string, categoryInfo: any }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryId);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'toys': '🧸',
      'furniture': '🛏️',
      'apparel': '👕',
      'food': '🍖',
      'grooming': '✂️',
      'decor': '🖼️'
    };
    return icons[category as keyof typeof icons] || '🐾';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{getCategoryIcon(categoryInfo.id)}</div>
          <h1 className="text-4xl font-bold text-cat-purple mb-2">{categoryInfo.name}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {categoryInfo.description}
          </p>
        </div>

        {/* Category Filter Pills */}
        <section className="py-8 bg-gray-50 rounded-2xl mb-8">
          <div className="px-4">
            <CategoryPills
              categories={categories}
              onCategorySelect={handleCategorySelect}
            />
          </div>
        </section>

        {/* Products Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedCategory ?
                categories.find(c => c.id === selectedCategory)?.name :
                'All Products'
              }
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">😺</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}