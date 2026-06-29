"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@heroui/react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaBirthdayCake,
  FaVenusMars,
  FaEdit,
  FaLock,
} from "react-icons/fa";

const ProfileManagementPage = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+8801712345678",
    address: "Dhaka, Bangladesh",
    gender: "Male",
    dob: "12 March 1998",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border">

        <div className="p-8 flex flex-col lg:flex-row gap-10">

          {/* Left */}
          <div className="lg:w-1/3 flex flex-col items-center">
            <Image
              src={user.image}
              alt={user.name}
              width={180}
              height={180}
              className="rounded-full border-4 border-blue-500 object-cover"
            />

            <h2 className="text-2xl font-bold mt-5">
              {user.name}
            </h2>

            <span className="mt-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
              {user.role}
            </span>

            <div className="w-full mt-8 space-y-3">
              <Button
                color="primary"
                className="w-full"
                startContent={<FaEdit />}
              >
                Edit Profile
              </Button>

              <Button
                variant="bordered"
                className="w-full"
                startContent={<FaLock />}
              >
                Change Password
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-8">
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <Info icon={<FaEnvelope />} label="Email" value={user.email} />

              <Info icon={<FaPhoneAlt />} label="Phone" value={user.phone} />

              <Info
                icon={<FaMapMarkerAlt />}
                label="Address"
                value={user.address}
              />

              <Info
                icon={<FaVenusMars />}
                label="Gender"
                value={user.gender}
              />

              <Info
                icon={<FaBirthdayCake />}
                label="Date of Birth"
                value={user.dob}
              />

              <Info
                icon={<FaUser />}
                label="Account Type"
                value={user.role}
              />

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

function Info({ icon, label, value }) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-blue-500 text-xl">{icon}</span>
        <h4 className="font-semibold">{label}</h4>
      </div>

      <p className="text-gray-600 dark:text-gray-300">{value}</p>
    </div>
  );
}

export default ProfileManagementPage;