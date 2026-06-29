import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
export const metadata = {
  title: "Doctor| ContactUs",
};

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-blue-100">
            We'd love to hear from you. Reach out anytime!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg p-8 transition-colors">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <FaPhoneAlt className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  +880 1234-567890
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
                <FaEnvelope className="text-red-500 dark:text-red-400 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  support@healthcare.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <FaMapMarkerAlt className="text-green-600 dark:text-green-400 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Address
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full">
                <FaClock className="text-yellow-500 dark:text-yellow-400 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Working Hours
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Saturday - Thursday <br />
                  9:00 AM - 8:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg p-8 transition-colors">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Send Us a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;