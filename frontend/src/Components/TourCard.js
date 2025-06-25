import Link from 'next/link'

export default function TourCard({ tour }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={`/images/${tour.image}`}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{tour.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{tour.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-200 font-medium">{tour.duration}</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">{tour.price}</span>
        </div>
        <Link
          href={`/tours/${tour.id}`}
          className="mt-4 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
        >
          Book This Tour
        </Link>
      </div>
    </div>
  )
}