'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Discover the World <span className="text-blue-600 dark:text-blue-400">With Me</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Professional tour guide with 10+ years of experience showing travelers the hidden gems of our beautiful region.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#tours"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-center"
              >
                Explore Tours
              </Link>
              <Link
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors text-center"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="/images/guide-portrait.jpg"
                alt="Tour Guide"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for tours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}