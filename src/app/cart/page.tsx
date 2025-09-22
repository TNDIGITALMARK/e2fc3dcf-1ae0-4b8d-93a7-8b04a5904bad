'use client';

import { ShoppingCartComponent } from '@/components/shopping-cart';

export default function CartPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-cat-purple mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            Review your items and proceed to checkout when ready
          </p>
        </div>

        <ShoppingCartComponent />
      </div>
    </div>
  );
}