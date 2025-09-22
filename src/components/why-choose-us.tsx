'use client';

export function WhyChooseUs() {
  const features = [
    {
      icon: '🌟',
      title: 'Quality Products',
      description: 'Premium products tested and approved by cat experts'
    },
    {
      icon: '🐾',
      title: 'Cat Experts',
      description: 'Our team knows what cats love and need for happy lives'
    },
    {
      icon: '❤️',
      title: 'Customer Care',
      description: 'Dedicated support for you and your feline family'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cat-purple-light to-cat-teal-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cat-purple mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're passionate about cats and dedicated to providing the best products
            and service for you and your feline friends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 text-center bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-semibold text-cat-purple mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Get the latest cat care tips, product updates, and exclusive offers delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cat-purple"
            />
            <button className="bg-cat-teal hover:bg-cat-teal/90 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Subscribe 🐾
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}