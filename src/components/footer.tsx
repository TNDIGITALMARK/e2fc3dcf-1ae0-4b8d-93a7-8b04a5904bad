'use client';

import Link from 'next/link';

export function Footer() {
  const footerSections = [
    {
      title: 'About Us',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' }
      ]
    },
    {
      title: 'Customer Service',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Shipping Info', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
        { label: 'Size Guide', href: '/size-guide' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Accessibility', href: '/accessibility' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Newsletter', href: '/newsletter' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Twitter', href: 'https://twitter.com' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-cat-purple-light to-cat-teal-light border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="font-pacifico text-xl text-cat-purple">
                Purrfect Paws
              </span>
            </Link>
            <p className="text-gray-600 text-sm mb-4 max-w-xs">
              Premium cat products and accessories to keep your feline friends happy and healthy.
            </p>
            <div className="flex space-x-3 text-2xl">
              <span>🐱</span>
              <span>❤️</span>
              <span>🏠</span>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="font-semibold text-gray-800">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-cat-purple text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 sm:mb-0">
            © 2024 Purrfect Paws. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>for cat lovers</span>
            <span className="text-lg">🐾</span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 mb-2">Trusted by cat lovers worldwide</p>
          <div className="flex justify-center items-center space-x-6 text-gray-400">
            <div className="flex items-center space-x-1">
              <span className="text-sm">🔒</span>
              <span className="text-xs">Secure Payment</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">🚚</span>
              <span className="text-xs">Fast Shipping</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">↩️</span>
              <span className="text-xs">Easy Returns</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">📞</span>
              <span className="text-xs">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}