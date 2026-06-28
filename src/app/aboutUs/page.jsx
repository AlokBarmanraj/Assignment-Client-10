import React from "react";
import {
  FaUserMd,
  FaHeartbeat,
  FaHospital,
  FaShieldAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            We are dedicated to making healthcare simple, accessible, and
            reliable by connecting patients with experienced doctors through a
            seamless online appointment platform.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900"
            alt="Hospital"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-8 mb-6">
            Our platform is designed to simplify the healthcare experience.
            Patients can easily search for qualified doctors, book appointments,
            and receive quality medical care without unnecessary delays.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-8">
            We collaborate with trusted hospitals and experienced healthcare
            professionals to provide secure, reliable, and patient-focused
            healthcare services for everyone.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white dark:bg-gray-900 transition-colors duration-300 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Why Choose Us
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              We provide a smarter healthcare experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow hover:shadow-xl transition-all">
              <FaUserMd className="text-5xl text-blue-600 dark:text-blue-400 mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Expert Doctors
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with experienced and verified doctors across multiple
                specialties.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow hover:shadow-xl transition-all">
              <FaClock className="text-5xl text-blue-600 dark:text-blue-400 mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Easy Appointment
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Book appointments anytime with just a few clicks from your
                device.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow hover:shadow-xl transition-all">
              <FaShieldAlt className="text-5xl text-blue-600 dark:text-blue-400 mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Secure & Trusted
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your personal information is protected with industry-standard
                security.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow hover:shadow-xl transition-all">
              <FaHeartbeat className="text-5xl text-red-500 dark:text-red-400 mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality Healthcare
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We focus on delivering excellent healthcare services with care
                and compassion.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow hover:shadow-xl transition-all">
              <FaHospital className="text-5xl text-green-600 dark:text-green-400 mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Trusted Hospitals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Partnered with reputable hospitals and clinics for better
                patient care.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow hover:shadow-xl transition-all">
              <FaUsers className="text-5xl text-purple-600 dark:text-purple-400 mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Patient First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every feature is designed to improve the patient experience from
                booking to consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>

          <p className="text-lg leading-9 text-blue-100">
            Our mission is to bridge the gap between patients and healthcare
            providers through technology. We strive to make healthcare
            accessible, affordable, and efficient while ensuring every patient
            receives the care they deserve.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;