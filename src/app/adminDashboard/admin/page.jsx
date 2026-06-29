"use client";

import { Card, Button } from "@heroui/react";
import {
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaClock,
  FaMoneyBillWave,
  FaStar,
  FaBell,
  FaArrowUp,
} from "react-icons/fa";

export default function AdminPage() {
  const stats = [
    {
      title: "Total Doctors",
      value: "120",
      icon: <FaUserMd className="text-3xl text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Total Patients",
      value: "3,250",
      icon: <FaUsers className="text-3xl text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Appointments",
      value: "1,430",
      icon: <FaCalendarCheck className="text-3xl text-white" />,
      color: "bg-purple-500",
    },
    {
      title: "Pending",
      value: "38",
      icon: <FaClock className="text-3xl text-white" />,
      color: "bg-yellow-500",
    },
    {
      title: "Revenue",
      value: "$25,800",
      icon: <FaMoneyBillWave className="text-3xl text-white" />,
      color: "bg-emerald-500",
    },
    {
      title: "Reviews",
      value: "890",
      icon: <FaStar className="text-3xl text-white" />,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
        <div>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
            Welcome Back, Admin 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Hospital Management Dashboard
          </p>
        </div>

        <Button color="primary" startContent={<FaBell />}>
          Notifications
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <Card key={index} className="shadow-xl">
            <div className="p-6 flex justify-between items-center">
              <div>
                <p className="text-gray-500">{item.title}</p>

                <h2 className="text-4xl font-bold mt-2">{item.value}</h2>

                <div className="flex items-center text-green-600 mt-3 text-sm">
                  <FaArrowUp className="mr-2" />
                  12% this month
                </div>
              </div>

              <div className={`${item.color} p-5 rounded-2xl`}>
                {item.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Middle */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 shadow-xl">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              Recent Activities
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between border-b pb-3">
                <span>✅ Dr. John accepted an appointment</span>
                <span className="text-gray-400">2 min ago</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>👤 New patient registered</span>
                <span className="text-gray-400">10 min ago</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>💳 Payment completed</span>
                <span className="text-gray-400">25 min ago</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>⭐ New Review Added</span>
                <span className="text-gray-400">1 hour ago</span>
              </div>

              <div className="flex justify-between">
                <span>📅 Appointment Completed</span>
                <span className="text-gray-400">2 hours ago</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-xl">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="space-y-4">
              <Button color="primary" className="w-full">
                Add Doctor
              </Button>

              <Button color="success" className="w-full">
                Manage Patients
              </Button>

              <Button color="secondary" className="w-full">
                View Appointments
              </Button>

              <Button color="warning" className="w-full">
                Reports
              </Button>

              <Button color="danger" className="w-full">
                Send Notification
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom */}
      <div className="grid lg:grid-cols gap-6 mt-10">
        <Card className="shadow-xl">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-5">
              System Overview
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Server Status</span>
                <span className="text-green-600 font-bold">
                  Online
                </span>
              </div>

              <div className="flex justify-between">
                <span>Database</span>
                <span className="text-green-600 font-bold">
                  Connected
                </span>
              </div>

              <div className="flex justify-between">
                <span>Today's Appointments</span>
                <span>42</span>
              </div>

              <div className="flex justify-between">
                <span>Completed Today</span>
                <span>28</span>
              </div>

              <div className="flex justify-between">
                <span>Pending</span>
                <span>14</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}