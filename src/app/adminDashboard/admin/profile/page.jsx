"use client";

import React from "react";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import {
  FaUserShield,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserEdit,
  FaLock,
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
} from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className=" min-h-screen p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar
            src="https://i.pravatar.cc/200?img=12"
            className="w-32 h-32 border-4 border-white"
          />

          <div>
            <h1 className="text-4xl font-bold">Admin Panel</h1>

            <p className="text-lg opacity-90 mt-2">
              Hospital Management System
            </p>

            <Chip color="success" className="mt-4">
              Super Admin
            </Chip>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card className="p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <FaUserMd className="text-4xl text-blue-600" />
            <div>
              <h2 className="text-3xl font-bold">120</h2>
              <p>Total Doctors</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <FaUsers className="text-4xl text-green-600" />
            <div>
              <h2 className="text-3xl font-bold">5,430</h2>
              <p>Total Patients</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <FaCalendarCheck className="text-4xl text-purple-600" />
            <div>
              <h2 className="text-3xl font-bold">1,280</h2>
              <p>Appointments</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Information */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {/* Personal Info */}
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Personal Information
          </h2>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaUserShield className="text-blue-600" />
              <div>
                <p className="text-gray-500">Full Name</p>
                <h3 className="font-semibold text-lg">
                  Admin User
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-500" />
              <div>
                <p className="text-gray-500">Email</p>
                <h3 className="font-semibold">
                  admin@admin.com
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-600" />
              <div>
                <p className="text-gray-500">Phone</p>
                <h3 className="font-semibold">
                  +880 1712-345678
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-600" />
              <div>
                <p className="text-gray-500">Location</p>
                <h3 className="font-semibold">
                  Dhaka, Bangladesh
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-purple-600" />
              <div>
                <p className="text-gray-500">Joined</p>
                <h3 className="font-semibold">
                  10 January 2025
                </h3>
              </div>
            </div>
          </div>
        </Card>

        {/* Account */}
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Account Information
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span>Role</span>
              <Chip color="primary">Super Admin</Chip>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <Chip color="success">Active</Chip>
            </div>

            <div className="flex justify-between">
              <span>Last Login</span>
              <span>Today 09:35 AM</span>
            </div>

            <div className="flex justify-between">
              <span>Email Verified</span>
              <Chip color="success">Verified</Chip>
            </div>

            <div className="flex justify-between">
              <span>Two Factor Auth</span>
              <Chip color="warning">Disabled</Chip>
            </div>

            <div className="pt-8 flex gap-4">
              <Button
                color="primary"
                startContent={<FaUserEdit />}
              >
                Edit Profile
              </Button>

              <Button
                color="danger"
                variant="bordered"
                startContent={<FaLock />}
              >
                Change Password
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;