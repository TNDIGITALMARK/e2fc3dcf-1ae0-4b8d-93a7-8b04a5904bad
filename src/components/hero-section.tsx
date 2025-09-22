'use client';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-cat-purple-light to-cat-teal-light py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-pacifico text-5xl lg:text-6xl text-cat-purple mb-4">
              Purrfect Paws
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Spoil Your Best Friend
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Discover Premium <span className="text-cat-purple font-semibold">Cat</span> Products
            </p>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              From cozy beds and interactive toys to gourmet treats and stylish accessories -
              everything your feline friend needs for a happy, healthy life.
            </p>
            <Button
              size="lg"
              className="bg-cat-teal hover:bg-cat-teal/90 text-white font-semibold px-8 py-4 rounded-lg paw-decoration"
            >
              Shop Now
            </Button>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                {/* Hero cats image */}
                <img
                  src="/generated/three-adorable-cats-hero.png"
                  alt="Three adorable cats - a black cat, orange tabby, and gray and white cat sitting together"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements - toys scattered around */}
              <div className="absolute -top-2 -left-2 bg-orange-200 rounded-full p-2 shadow-md">
                <span className="text-lg">🧶</span>
              </div>
              <div className="absolute -top-2 right-4 bg-pink-200 rounded-full p-2 shadow-md">
                <span className="text-lg">🐭</span>
              </div>
              <div className="absolute -bottom-2 left-8 bg-yellow-200 rounded-full p-2 shadow-md">
                <span className="text-lg">🎾</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-200 rounded-full p-2 shadow-md">
                <span className="text-lg">🪶</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative paw prints */}
      <div className="absolute top-10 left-10 text-cat-purple/20 text-2xl animate-pulse">🐾</div>
      <div className="absolute bottom-10 right-10 text-cat-teal/20 text-2xl animate-pulse">🐾</div>
      <div className="absolute top-1/2 left-5 text-cat-purple/10 text-lg animate-pulse">🐾</div>
    </section>
  );
}