import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, TESTIMONIALS_ROUTE, TOUR_ROUTE } from '@/constants/routes'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaTripadvisor, FaLine, FaHome  } from 'react-icons/fa'
import { MdPhoneInTalk,  MdEmail } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";


export default function Footer() {
  return (
    <footer className="bg-white text-gray-900  dark:bg-gray-900 dark:text-white py-12 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Binod Silwal khatri</h3>
            <p className="text-gray-900 dark:text-white">
              Professional tour guiding services offering unique experiences and unforgettable memories.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href={HOME_ROUTE} className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link href={ABOUT_ROUTE} className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors">About</Link></li>
              <li><Link href={TOUR_ROUTE} className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors">Tours</Link></li>
              <li><Link href={TESTIMONIALS_ROUTE} className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors">Testimonials</Link></li>
              <li><Link href={CONTACT_ROUTE} className="text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="text-gray-900 hover:text-red-700 dark:text-white dark:hover:text-yellow-500 transition-colors">
              <li className='flex items-center gap-3'><FaHome className='h-5 w-5'/> Thamel, Kathmandu</li>
              <li className='flex items-center gap-3'><MdPhoneInTalk className='h-5 w-5'/> +977- 9851040321</li>
              <li className='flex items-center gap-3'><MdEmail className='h-5 w-5'/>binodsilwal@gmail.com</li>
              <li className='flex items-center gap-3'><FaLine className='h-5 w-5'/> binod</li>
              <li className='flex items-center gap-3'><AiFillWechat className='h-5 w-5'/> binod40321</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
             <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
             </Link>
             <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
             </Link>
             <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
             </Link>
             <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTripadvisor size={20} />
             </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 gap-4 flex flex-col md:flex-row justify-between items-center text-center text-gray-800 dark:text-gray-100">
         <Link href="https://khatribinodsilwal.com.np">&copy; {new Date().getFullYear()} Binod Silwal Khatri. All rights reserved.</Link> 
         <Link href="https://dangolprabin.com.np">Designed and Developed by Prabin Dangol</Link>
        </div>
      </div>
    </footer>
  )
}