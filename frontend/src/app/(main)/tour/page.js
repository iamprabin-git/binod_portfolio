import { TOURS } from '@/constants/tours'
import TourCard from '@/components/TourCard'

export const metadata = {
  title: 'Tours - Adventure Guides',
  description: 'Explore our featured tours',
}

export default function ToursPage() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Featured Tours</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my most popular tours, carefully designed to showcase the best of our region
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}