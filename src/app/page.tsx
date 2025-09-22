import { HeroSection } from '@/components/hero-section';
import { ProductGrid } from '@/components/product-grid';
import { CategoryPills } from '@/components/category-pills';
import { WhyChooseUs } from '@/components/why-choose-us';
import { featuredProducts, categories } from '@/data/products';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <CategoryPills categories={categories} />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-cat-purple mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular items, carefully selected for your feline friends
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />
    </div>
  );
}