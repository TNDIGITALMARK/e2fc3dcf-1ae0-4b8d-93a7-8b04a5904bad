'use client';

import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    // Cart functionality will be implemented later
    console.log('Added to cart:', product.name);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-cat-purple/20">
      <CardContent className="p-0">
        {/* Product Image */}
        <Link href={`/product/${product.id}`}>
          <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center text-gray-400 relative overflow-hidden cursor-pointer">
            <div className="text-center group-hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-2">
                {product.category === 'toys' && '🧸'}
                {product.category === 'furniture' && '🛏️'}
                {product.category === 'apparel' && '👕'}
                {product.category === 'food' && '🍖'}
                {product.category === 'grooming' && '✂️'}
                {product.category === 'decor' && '🖼️'}
              </div>
              <p className="text-xs">{product.name}</p>
            </div>

            {/* Sale badge */}
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                SALE
              </div>
            )}

            {/* Rating overlay */}
            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-xs">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-gray-500">({product.reviewCount})</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-4">
          <Link href={`/product/${product.id}`}>
            <h3 className="font-semibold text-gray-800 mb-2 hover:text-cat-purple cursor-pointer line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-cat-purple">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {product.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-cat-purple-light text-cat-purple px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-cat-teal hover:bg-cat-teal/90 text-white font-medium"
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          <span className="ml-2">🐾</span>
        </Button>
      </CardFooter>
    </Card>
  );
}