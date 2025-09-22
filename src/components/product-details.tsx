'use client';

import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    // Cart functionality will be implemented later
    console.log('Added to cart:', product.name, 'Quantity:', quantity);
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
    <div className="max-w-6xl mx-auto">
      {/* Back button */}
      <Link href="/" className="inline-flex items-center text-cat-purple hover:text-cat-purple/80 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 relative overflow-hidden">
            <div className="text-center">
              <div className="text-6xl mb-4">{getCategoryIcon(product.category)}</div>
              <p className="text-lg font-medium">{product.name}</p>
            </div>

            {/* Sale badge */}
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
                SAVE ${(product.originalPrice - product.price).toFixed(2)}
              </div>
            )}

            {/* Stock indicator */}
            <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-lg text-sm font-medium ${
              product.inStock
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>

          {/* Thumbnail gallery placeholder */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                <span className="text-lg">{getCategoryIcon(product.category)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2 border-cat-purple text-cat-purple">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium text-gray-900">{product.rating}</span>
              <span className="text-gray-500">({product.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-cat-purple">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <Badge variant="destructive" className="bg-red-500">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              </>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-cat-purple-light text-cat-purple">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Quantity selector */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quantity</h3>
              <div className="flex items-center border border-gray-200 rounded-lg w-fit">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="rounded-none border-none"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 min-w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  className="rounded-none border-none"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-cat-teal hover:bg-cat-teal/90 text-white font-semibold py-3"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                <span className="ml-2">🐾</span>
              </Button>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 ${isWishlisted ? 'border-red-300 text-red-600' : ''}`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </Button>

                <Button variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="border-t border-gray-200 pt-6 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Free shipping</span>
              <span className="font-medium">on orders over $50</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Estimated delivery</span>
              <span className="font-medium">3-5 business days</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Return policy</span>
              <span className="font-medium">30 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}