'use client';
import ContactForm from '@/components/ContactForm';
import SocialMedia from '@/components/SocialMedia';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://your-strapi-url.com/api/contact-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch for tour bookings or inquiries
          </p>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section (Left) */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
                  Error sending message. Please try again later.
                </div>
              )}

              <ContactForm 
                isSubmitting={isSubmitting} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                formData={formData} 
              />
            </div>
          </div>

          {/* Contact Info Section (Right) */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaWhatsapp className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">WhatsApp</h4>
                    <Link
                      href="https://wa.me/9851040321?text=Hello%20I'm%20interested%20in%20your%20tours" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      +977-9851040321
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Fastest way to get in touch
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Phone</h4>
                    <Link href="tel:+977-9851040321" className="text-gray-800 dark:text-gray-300 hover:underline">
                      +977-9851040321
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Available 9AM-6PM daily
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Email</h4>
                    <Link href="mailto:guide@adventures.com" className="text-gray-600 dark:text-gray-300 hover:underline">
                      binodsilwal@gmail.com
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thamel, Kathmandu<br />
                      Nepal
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Available for local meetups
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  {/* Add your social media icons/links here */}
                  <SocialMedia /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}