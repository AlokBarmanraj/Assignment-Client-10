"use client";

import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Chip,
  Input,
} from "@heroui/react";

import {
  FaSearch,
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaEye,
  FaTimes,
} from "react-icons/fa";

export default function UpcomingAppointmentsPage() {
  const [appointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Ahmed",
      specialization: "Cardiologist",
      date: "30 Jun 2026",
      time: "10:30 AM",
      status: "Confirmed",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 2,
      doctor: "Dr. John Smith",
      specialization: "Neurologist",
      date: "02 Jul 2026",
      time: "02:00 PM",
      status: "Pending",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      doctor: "Dr. Emily",
      specialization: "Dentist",
      date: "05 Jul 2026",
      time: "11:15 AM",
      status: "Confirmed",
      image: "https://i.pravatar.cc/150?img=13",
    },
  ]);

  const statusColor = {
    Confirmed: "success",
    Pending: "warning",
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Upcoming Appointments
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            View and manage your upcoming doctor appointments.
          </p>
        </div>

        <Button color="primary">
          New Appointment
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        <Card className="p-6 bg-white dark:bg-zinc-900">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Upcoming</p>
              <h2 className="text-3xl font-bold text-blue-600">
                {appointments.length}
              </h2>
            </div>

            <FaCalendarAlt className="text-5xl text-blue-500" />
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-zinc-900">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Confirmed</p>
              <h2 className="text-3xl font-bold text-green-600">
                {
                  appointments.filter(
                    (item) => item.status === "Confirmed"
                  ).length
                }
              </h2>
            </div>

            <FaClock className="text-5xl text-green-500" />
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-zinc-900">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Pending</p>
              <h2 className="text-3xl font-bold text-yellow-500">
                {
                  appointments.filter(
                    (item) => item.status === "Pending"
                  ).length
                }
              </h2>
            </div>

            <FaClock className="text-5xl text-yellow-500" />
          </div>
        </Card>

      </div>

      {/* Desktop Table */}
      <Card className="hidden lg:block bg-white dark:bg-zinc-900 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100 dark:bg-zinc-800">
            <tr>
              <th className="p-4 text-left">Doctor</th>
              <th>Specialization</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {appointments.map((appointment) => (

              <tr
                key={appointment.id}
                className="border-b dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar src={appointment.image} />
                    <h2 className="font-semibold text-gray-900 dark:text-white">
                      {appointment.doctor}
                    </h2>
                  </div>
                </td>

                <td>{appointment.specialization}</td>

                <td>{appointment.date}</td>

                <td>{appointment.time}</td>

                <td>
                  <Chip color={statusColor[appointment.status]}>
                    {appointment.status}
                  </Chip>
                </td>

                <td>
                  <div className="flex justify-center gap-2">
                    <Button isIconOnly color="primary">
                      <FaEye />
                    </Button>

                    <Button isIconOnly color="danger">
                      <FaTimes />
                    </Button>
                  </div>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </Card>

      {/* Mobile Cards */}
      <div className="grid gap-5 lg:hidden">

        {appointments.map((appointment) => (

          <Card
            key={appointment.id}
            className="p-5 bg-white dark:bg-zinc-900"
          >
            <div className="flex items-center gap-4">

              <Avatar
                src={appointment.image}
                className="w-16 h-16"
              />

              <div>
                <h2 className="font-bold text-gray-900 dark:text-white">
                  {appointment.doctor}
                </h2>

                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <FaUserMd />
                  {appointment.specialization}
                </p>

                <p className="text-sm mt-1">
                  {appointment.date} • {appointment.time}
                </p>

                <Chip
                  className="mt-2"
                  color={statusColor[appointment.status]}
                >
                  {appointment.status}
                </Chip>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">

              <Button color="primary">
                <FaEye />
                View
              </Button>

              <Button color="danger">
                <FaTimes />
                Cancel
              </Button>

            </div>

          </Card>

        ))}

      </div>

    </div>
  );
}