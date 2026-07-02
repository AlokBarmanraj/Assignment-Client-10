"use client";

import Link from "next/link";
import { FaCheckCircle, FaHome, FaCalendarCheck } from "react-icons/fa";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-5">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 text-center border border-gray-100">

        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
            <FaCheckCircle className="text-green-600 text-6xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mt-8">
          Payment Successful!
        </h1>

        <p className="text-gray-500 mt-4 leading-7">
          Thank you for your payment. Your doctor appointment has been
          successfully confirmed.
        </p>

        {/* Success Card */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mt-8">

          <h3 className="text-xl font-semibold text-green-700">
            Appointment Confirmed
          </h3>

          <p className="text-gray-600 mt-3">
            A confirmation email has been sent to your registered email
            address. You can also view your appointment details from your
            dashboard.
          </p>
        </div>

        {/* Buttons */}
        <div className=" mt-10">

          <Link href="/">
            <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold flex items-center justify-center gap-2">
              <FaHome />
              Back Home
            </button>
          </Link>

        </div>

        <p className="text-gray-400 text-sm mt-8">
          Need help? Contact our support team anytime.
        </p>

      </div>
    </div>
  );
}