'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import heroImage from '@/assets/profile.jpg' // Replace with your actual portrait image

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
      when: 'beforeChildren',
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

const wordVariants = {
  animate: (i) => ({
    x: ['-100%', '100%'],
    transition: {
      x: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        delay: i * 0.2,
      },
    },
  }),
}

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

// Service pool for random selection
const servicePool = [
  'Himalayan Trekking Guide',
  'Cultural Explorer',
  'Everest Adventure Leader',
  'Nature Expedition Expert',
  'Local Heritage Guide',
  'Mountain Trail Navigator',
  'Eco-Tourism Specialist',
  'Spiritual Journey Mentor',
]

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]) // Parallax for image

  // State for random service
  const [currentService, setCurrentService] = useState(
    servicePool[Math.floor(Math.random() * servicePool.length)]
  )

  // Randomly change service every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService(
        servicePool[Math.floor(Math.random() * servicePool.length)]
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Split title into words for animation
  const titleWords = ['Hello,', "I'm", 'Binod', 'Silwal', 'Khatri']

  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-green-50 via-teal-50 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex-1"
          style={{ y: yParallax }}
        >
          <div className="relative w-full h-auto max-h-[450px] shadow-xl rounded-xl overflow-hidden">
            <Image
              src={heroImage}
              alt="Binod Silwal Khatri Portrait"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight overflow-hidden"
            style={{ position: 'relative' }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className={word === 'Binod' ? 'text-teal-500' : ''}
                variants={wordVariants}
                custom={index}
                animate="animate"
                style={{ display: 'inline-block', marginRight: '0.25em', whiteSpace: 'nowrap' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            variants={serviceVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={currentService}
            className="mt-2"
          >
            <span className="text-2xl md:text-3xl font-semibold text-teal-500">
              {currentService}
            </span>
          </motion.div>

          <motion.p
            variants={textVariants}
            className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300"
          >
            Experienced tour guide leading unforgettable Himalayan adventures for travelers worldwide. Discover Nepals hidden gems with me!
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="mt-8 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#contact"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition duration-300"
              >
                Book a Tour
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#"
                className="px-6 py-3 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-medium rounded-lg transition duration-300"
                target="_blank"
              >
                Download CV
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
        <svg
          className="relative block w-full h-24 text-green-50 dark:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  )
}