import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="py-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Your Guide</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With over a decade of experience, I bring local knowledge and passion to every tour. My goal is to create unforgettable experiences that go beyond typical tourist attractions.
            </p>
            <Link
              href="/about"
              className="inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">5000+</h3>
                <p className="text-gray-600 dark:text-gray-400">Happy Travelers</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</h3>
                <p className="text-gray-600 dark:text-gray-400">5-Star Reviews</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</h3>
                <p className="text-gray-600 dark:text-gray-400">Languages Spoken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}