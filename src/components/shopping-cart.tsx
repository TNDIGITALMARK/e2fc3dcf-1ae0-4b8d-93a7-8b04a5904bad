'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem, calculateShipping, applyPromoCode } from '@/data/products';
import Link from 'next/link';

export function ShoppingCartComponent() {
  // Mock cart items - this would come from state management in a real app
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Interactive Cat Toy Set',
      price: 29.99,
      originalPrice: 39.99,
      image: '/api/placeholder/300/300',
      category: 'toys',
      description: 'A delightful set of interactive toys to keep your cat entertained for hours.',
      rating: 4.8,
      reviewCount: 124,
      inStock: true,
      tags: ['interactive', 'enrichment'],
      quantity: 2
    },
    {
      id: '2',
      name: 'Premium Cat Bed',
      price: 79.99,
      image: '/api/placeholder/300/300',
      category: 'furniture',
      description: 'Ultra-soft and comfortable bed perfect for cats of all sizes.',
      rating: 4.9,
      reviewCount: 89,
      inStock: true,
      tags: ['comfort', 'sleeping'],
      quantity: 1
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null);
  const [promoError, setPromoError] = useState('');

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = calculateShipping(subtotal);
  const promoDiscount = appliedPromo ? appliedPromo.discount : 0;
  const total = subtotal + shipping - promoDiscount;

  const handleApplyPromo = () => {
    const result = applyPromoCode(promoCode, subtotal);
    if (result.valid) {
      setAppliedPromo({ code: promoCode.toUpperCase(), discount: result.discount });
      setPromoError('');
    } else {
      setPromoError('Invalid promo code');
      setAppliedPromo(null);
    }
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

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some products to get started!</p>
        <Link href="/">
          <Button className="bg-cat-teal hover:bg-cat-teal/90 text-white">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Product Image */}
                <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 flex-shrink-0">
                  <div className="text-center">
                    <div className="text-2xl">{getCategoryIcon(item.category)}</div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-600 capitalize">{item.category}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-cat-purple">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center border border-gray-200 rounded-lg w-fit">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="rounded-none border-none h-10 w-10"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="px-4 py-2 min-w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-none border-none h-10 w-10"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>

                    {/* Item Total */}
                    <div className="text-lg font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle className="text-cat-purple">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Promo Code */}
            <div>
              <div className="flex gap-2">
                <Input
                  placeholder="Promo code (try FIRSTORDER)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  onClick={handleApplyPromo}
                  className="border-cat-purple text-cat-purple hover:bg-cat-purple-light"
                >
                  Apply
                </Button>
              </div>
              {promoError && (
                <p className="text-sm text-red-500 mt-2">{promoError}</p>
              )}
              {appliedPromo && (
                <p className="text-sm text-green-600 mt-2">
                  ✅ {appliedPromo.code} applied: -${appliedPromo.discount.toFixed(2)}
                </p>
              )}
            </div>

            <Separator />

            {/* Price Breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-green-600">
                  <span>Promo ({appliedPromo.code})</span>
                  <span>-${appliedPromo.discount.toFixed(2)}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-cat-purple">${total.toFixed(2)}</span>
              </div>
            </div>

            {shipping > 0 && (
              <p className="text-sm text-gray-600 bg-cat-teal-light p-3 rounded-lg">
                💡 Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!
              </p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button
              size="lg"
              className="w-full bg-cat-purple hover:bg-cat-purple/90 text-white font-semibold"
            >
              Proceed to Checkout 🐾
            </Button>
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}