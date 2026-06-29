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
  FaCheck,
  FaEye,
  FaSearch,
  FaTimes,
  FaUserMd,
  FaClock,
} from "react-icons/fa";

export default function VerifiesDoctorsPage() {
  const [doctors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      email: "sarah@gmail.com",
      specialization: "Cardiologist",
      experience: "8 Years",
      status: "Pending",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 2,
      name: "Dr. John Smith",
      email: "john@gmail.com",
      specialization: "Neurologist",
      experience: "10 Years",
      status: "Pending",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      name: "Dr. Emily",
      email: "emily@gmail.com",
      specialization: "Dentist",
      experience: "6 Years",
      status: "Verified",
      image: "https://i.pravatar.cc/150?img=13",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 p-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Verify Doctors
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Review and verify newly registered doctors.
          </p>
        </div>

        <Button color="primary">
          Pending Doctors
        </Button>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        <Card className="p-6 bg-white dark:bg-zinc-900">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500">
                Total Doctors
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                35
              </h2>

            </div>

            <FaUserMd className="text-5xl text-blue-500" />

          </div>

        </Card>

        <Card className="p-6 bg-white dark:bg-zinc-900">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Pending
              </p>

              <h2 className="text-3xl font-bold text-yellow-500">
                12
              </h2>

            </div>

            <FaClock className="text-5xl text-yellow-500" />

          </div>

        </Card>

        <Card className="p-6 bg-white dark:bg-zinc-900">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Verified
              </p>

              <h2 className="text-3xl font-bold text-green-500">
                23
              </h2>

            </div>

            <FaCheck className="text-5xl text-green-500" />

          </div>

        </Card>

      </div>

      {/* Desktop Table */}

      <Card className="hidden lg:block bg-white dark:bg-zinc-900 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100 dark:bg-zinc-800">

            <tr>

              <th className="p-4 text-left">
                Doctor
              </th>

              <th>Email</th>

              <th>Specialization</th>

              <th>Experience</th>

              <th>Status</th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {doctors.map((doctor) => (

              <tr
                key={doctor.id}
                className="border-b dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800"
              >

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <Avatar src={doctor.image} />

                    <div>

                      <h2 className="font-semibold text-gray-900 dark:text-white">
                        {doctor.name}
                      </h2>

                    </div>

                  </div>

                </td>

                <td>{doctor.email}</td>

                <td>{doctor.specialization}</td>

                <td>{doctor.experience}</td>

                <td>

                  <Chip
                    color={
                      doctor.status === "Verified"
                        ? "success"
                        : "warning"
                    }
                  >
                    {doctor.status}
                  </Chip>

                </td>

                <td>

                  <div className="flex justify-center gap-2">

                    <Button
                      isIconOnly
                      color="primary"
                    >
                      <FaEye />
                    </Button>

                    <Button
                      isIconOnly
                      color="success"
                    >
                      <FaCheck />
                    </Button>

                    <Button
                      isIconOnly
                      color="danger"
                    >
                      <FaTimes />
                    </Button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </Card>

      {/* Mobile */}

      <div className="grid gap-5 lg:hidden">

        {doctors.map((doctor) => (

          <Card
            key={doctor.id}
            className="p-5 bg-white dark:bg-zinc-900"
          >

            <div className="flex items-center gap-4">

              <Avatar
                src={doctor.image}
                className="w-16 h-16"
              />

              <div>

                <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                  {doctor.name}
                </h2>

                <p className="text-gray-500 text-sm">
                  {doctor.email}
                </p>

                <p className="text-sm mt-1">
                  {doctor.specialization}
                </p>

                <Chip
                  className="mt-2"
                  color={
                    doctor.status === "Verified"
                      ? "success"
                      : "warning"
                  }
                >
                  {doctor.status}
                </Chip>

              </div>

            </div>

            <div className="grid grid-cols-3 gap-3 mt-5">

              <Button color="primary">
                <FaEye />
              </Button>

              <Button color="success">
                <FaCheck />
              </Button>

              <Button color="danger">
                <FaTimes />
              </Button>

            </div>

          </Card>

        ))}

      </div>

    </div>
  );
}