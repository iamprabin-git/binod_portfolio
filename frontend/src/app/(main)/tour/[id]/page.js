import { notFound } from 'next/navigation'
import { TOURS } from '@/constants/tours'

export async function generateStaticParams() {
  return TOURS.map(tour => ({
    id: tour.id.toString()
  }))
}

export default function TourDetail({ params }) {
  const tour = TOURS.find(t => t.id.toString() === params.id)
  
  if (!tour) return notFound()

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={`/images/${tour.image}`}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{tour.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{tour.description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Tour Details</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Duration:</span> {tour.duration}</p>
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Price:</span> {tour.price} per person</p>
                <p className="text-gray-600 dark:text-gray-300"><span className="font-medium">Group Size:</span> Max 10 people</p>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Book This Tour
            </button>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">What You'll Experience</h3>
          <div className="prose dark:prose-invert">
            <p>This tour includes:</p>
            <ul>
              <li>Expert commentary from your local guide</li>
              <li>Visits to all the must-see locations</li>
              <li>Hidden gems off the beaten path</li>
              <li>Opportunities for amazing photos</li>
              <li>Local snacks and refreshments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}