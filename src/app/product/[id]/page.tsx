'use client';

import { products } from '@/data/products';
import { ProductDetails } from '@/components/product-details';
import { ProductGrid } from '@/components/product-grid';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  // Get related products from the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Product Details */}
        <ProductDetails product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-cat-purple mb-8 text-center">
              You Might Also Like
            </h2>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </div>
  );
}