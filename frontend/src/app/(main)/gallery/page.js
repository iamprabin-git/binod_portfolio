'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiFilter, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function GalleryPage() {
  // Gallery data - replace with your actual images
  const galleryData = [
    {
      id: 1,
      category: 'nature',
      src: '/images/gallery/nature-1.jpg',
      alt: 'Beautiful mountain landscape at sunrise',
      tour: 'Mountain Adventure'
    },
    {
      id: 2,
      category: 'culture',
      src: '/images/gallery/culture-1.jpg',
      alt: 'Traditional local festival dancers',
      tour: 'Cultural Experience'
    },
    {
      id: 3,
      category: 'adventure',
      src: '/images/gallery/adventure-1.jpg',
      alt: 'Group hiking through scenic trails',
      tour: 'Wilderness Expedition'
    },
    {
      id: 4,
      category: 'nature',
      src: '/images/gallery/nature-2.jpg',
      alt: 'Serene lake with mountain reflections',
      tour: 'Lakeside Retreat'
    },
    {
      id: 5,
      category: 'food',
      src: '/images/gallery/food-1.jpg',
      alt: 'Traditional local cuisine presentation',
      tour: 'Food & Culture Tour'
    },
    {
      id: 6,
      category: 'adventure',
      src: '/images/gallery/adventure-2.jpg',
      alt: 'Kayaking in crystal clear waters',
      tour: 'Water Adventure'
    },
  ];

  // Get all unique categories
  const categories = ['all', ...new Set(galleryData.map(item => item.category))];
  
  // State management
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(image => image.category === activeCategory);

  // Lightbox navigation functions
  const handlePrev = () => {
    setSelectedImage(prev => {
      const currentIndex = filteredImages.findIndex(img => img.id === prev.id);
      return currentIndex <= 0 
        ? filteredImages[filteredImages.length - 1]
        : filteredImages[currentIndex - 1];
    });
  };

  const handleNext = () => {
    setSelectedImage(prev => {
      const currentIndex = filteredImages.findIndex(img => img.id === prev.id);
      return currentIndex >= filteredImages.length - 1
        ? filteredImages[0]
        : filteredImages[currentIndex + 1];
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Gallery Header */}
      <header className="py-25 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Tour Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore moments from our unforgettable tours and adventures
          </p>
        </div>
      </header>

      {/* Main Gallery Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className={`w-full sm:w-auto transition-all duration-300 overflow-hidden ${
              showFilters ? 'max-h-40' : 'max-h-12'
            }`}>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2 rounded-full capitalize text-sm sm:text-base ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg sm:hidden"
            >
              {showFilters ? <FiX /> : <FiFilter />}
              {showFilters ? 'Close' : 'Filters'}
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium">{image.tour}</h3>
                  <p className="text-gray-300 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No images found in this category. Please try another filter.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <FiX size={28} />
            </button>
            
            {/* Main Image */}
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full max-h-[80vh] object-contain"
                priority
              />
              
              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                  >
                    <FiChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            
            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-medium">{selectedImage.tour}</h3>
              <p className="text-gray-300">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}