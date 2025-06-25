export const metadata = {
  title: 'About - Adventure Guides',
  description: 'Learn about your professional tour guide',
}

export default function AboutPage() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="/images/guide-about.jpg"
                alt="About the guide"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Hi, I'm Alex - Your Local Tour Expert
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Born and raised in this beautiful region, I've spent over a decade sharing my passion for local history, culture, and nature with visitors from around the world.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I hold a degree in Tourism Management and certifications in Wilderness First Aid. My tours combine historical facts with personal stories and local legends that you won't find in guidebooks.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white">10+ Years</h4>
                <p className="text-gray-600 dark:text-gray-400">Experience</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white">5000+</h4>
                <p className="text-gray-600 dark:text-gray-400">Happy Travelers</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white">100%</h4>
                <p className="text-gray-600 dark:text-gray-400">5-Star Reviews</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white">Fluent in</h4>
                <p className="text-gray-600 dark:text-gray-400">4 Languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}