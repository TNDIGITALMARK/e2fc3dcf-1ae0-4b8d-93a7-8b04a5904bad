export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  { id: 'toys', name: 'Cat Toys & Enrichment', description: 'Interactive toys and enrichment for happy cats' },
  { id: 'furniture', name: 'Cat Furniture & Beds', description: 'Comfortable beds and furniture for your feline' },
  { id: 'apparel', name: 'Cat-Themed Apparel', description: 'Stylish clothing for cat lovers' },
  { id: 'food', name: 'Premium Cat Food & Treats', description: 'Nutritious food and delicious treats' },
  { id: 'grooming', name: 'Cat Grooming & Care', description: 'Essential grooming and care products' },
  { id: 'decor', name: 'Cat Art & Decor', description: 'Beautiful cat-themed home decorations' },
];

export const products: Product[] = [
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
    tags: ['interactive', 'enrichment']
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
    tags: ['comfort', 'sleeping']
  },
  {
    id: '3',
    name: 'Cat Lover T-Shirt',
    price: 24.99,
    image: '/api/placeholder/300/300',
    category: 'apparel',
    description: 'Show your love for cats with this comfortable cotton t-shirt.',
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    tags: ['clothing', 'cotton']
  },
  {
    id: '4',
    name: 'Gourmet Cat Treats',
    price: 18.99,
    originalPrice: 22.99,
    image: '/api/placeholder/300/300',
    category: 'food',
    description: 'Premium treats made with natural ingredients your cat will love.',
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    tags: ['treats', 'natural']
  },
  {
    id: '5',
    name: 'Cat Grooming Kit',
    price: 34.99,
    image: '/api/placeholder/300/300',
    category: 'grooming',
    description: 'Complete grooming kit with brushes, nail clippers, and more.',
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
    tags: ['grooming', 'kit']
  },
  {
    id: '6',
    name: 'Cat Wall Art Print',
    price: 19.99,
    image: '/api/placeholder/300/300',
    category: 'decor',
    description: 'Beautiful artistic print perfect for any cat lover\'s home.',
    rating: 4.8,
    reviewCount: 92,
    inStock: true,
    tags: ['art', 'print', 'wall-decor']
  },
  {
    id: '7',
    name: 'Multi-Level Cat Tree',
    price: 149.99,
    originalPrice: 189.99,
    image: '/api/placeholder/300/300',
    category: 'furniture',
    description: 'Spacious cat tree with multiple levels, scratching posts, and cozy hideouts.',
    rating: 4.9,
    reviewCount: 145,
    inStock: true,
    tags: ['cat-tree', 'scratching', 'climbing']
  },
  {
    id: '8',
    name: 'Catnip Mouse Toys',
    price: 12.99,
    image: '/api/placeholder/300/300',
    category: 'toys',
    description: 'Set of 3 adorable catnip-filled mouse toys.',
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    tags: ['catnip', 'mice', 'set']
  }
];

export const featuredProducts = products.slice(0, 4);

// Mock functions for cart and filtering
export interface CartItem extends Product {
  quantity: number;
}

export class CartManager {
  private items: CartItem[] = [];

  addItem(product: Product, quantity: number = 1): void {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity });
    }
  }

  removeItem(productId: string): void {
    this.items = this.items.filter(item => item.id !== productId);
  }

  updateQuantity(productId: string, quantity: number): void {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getItemCount(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  clear(): void {
    this.items = [];
  }
}

export const cart = new CartManager();

// Promo codes
export const promoCodes: { [code: string]: { discount: number; description: string } } = {
  'FIRSTORDER': { discount: 0.1, description: '10% off your first order' },
};

export function applyPromoCode(code: string, total: number): { newTotal: number; discount: number; valid: boolean } {
  const promo = promoCodes[code.toUpperCase()];
  if (promo) {
    const discount = total * promo.discount;
    return { newTotal: total - discount, discount, valid: true };
  }
  return { newTotal: total, discount: 0, valid: false };
}

// Shipping calculator
export function calculateShipping(total: number): number {
  if (total >= 50) return 0; // Free shipping over $50
  return 9.99;
}