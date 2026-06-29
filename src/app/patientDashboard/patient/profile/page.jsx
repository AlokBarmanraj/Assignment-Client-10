"use client";

import { useState } from "react";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import {
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function ProfilePage() {
  const [user] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    phone: "+8801712345678",
    role: "Patient",
    address: "Dhaka, Bangladesh",
    joined: "12 January 2025",
    bio: "Passionate about maintaining a healthy lifestyle and regularly booking doctor appointments.",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 p-6 flex justify-center">
      <Card className="w-full max-w-3xl p-8 bg-white dark:bg-zinc-900 shadow-xl rounded-2xl">
        {/* Avatar Section */}
        <div className="flex flex-col items-center">
            <Image
              src={user.image}
              alt={user.name}
              width={180}
              height={180}
              className="rounded-full border-4 border-blue-500 object-cover"
            />

          <Button size="sm" color="primary" className="mt-4">
            <FaCamera className="mr-2" />
            Change Photo
          </Button>

          <h1 className="text-3xl font-bold mt-5">{user.name}</h1>

          <Chip color="primary" className="mt-3">
            {user.role}
          </Chip>
        </div>

        <div className="my-8 border-t border-gray-200 dark:border-zinc-700"></div>

        {/* Info Section */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary text-xl" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p>{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-primary text-xl" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p>{user.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p>{user.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaCalendarAlt className="text-primary text-xl" />
            <div>
              <p className="text-sm text-gray-500">Joined</p>
              <p>{user.joined}</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">About</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-7">
              {user.bio}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}