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
  FaEdit,
  FaEye,
  FaSearch,
  FaTrash,
  FaUserPlus,
  FaUsers,
  FaUserMd,
  FaUserShield,
} from "react-icons/fa";

export default function ManagesUsersPage() {
  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      role: "Patient",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Dr. Sarah",
      email: "sarah@gmail.com",
      role: "Doctor",
      status: "Pending",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Admin",
      email: "admin@gmail.com",
      role: "Admin",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Alex Smith",
      email: "alex@gmail.com",
      role: "Patient",
      status: "Blocked",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ]);

  const roleColor = {
    Admin: "danger",
    Doctor: "primary",
    Patient: "success",
  };

  const statusColor = {
    Active: "success",
    Pending: "warning",
    Blocked: "danger",
  };

  return (
    <div className="min-h-screen p-4 md:p-8">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-5 items-center mb-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Manage Users
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all users admins.
          </p>
        </div>

        <Button
          color="primary"
          startContent={<FaUserPlus />}
        >
          Add User
        </Button>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <Card className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p>Total Users</p>
              <h2 className="text-3xl font-bold">
                {users.length}
              </h2>
            </div>

            <FaUsers className="text-4xl text-blue-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p>Doctors</p>
              <h2 className="text-3xl font-bold">12</h2>
            </div>

            <FaUserMd className="text-4xl text-green-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p>Patients</p>
              <h2 className="text-3xl font-bold">320</h2>
            </div>

            <FaUsers className="text-4xl text-purple-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p>Admins</p>
              <h2 className="text-3xl font-bold">2</h2>
            </div>

            <FaUserShield className="text-4xl text-red-600" />
          </div>
        </Card>

      </div>

      {/* Search */}


      {/* Desktop Table */}

      <Card className="hidden lg:block overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr>

              <th className="text-left p-4">User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-center">Actions</th>

            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-b"
              >

                <td className="p-4">
                  <div className="flex items-center gap-3">

                    <Avatar src={user.image} />

                    <div>
                      <h2 className="font-semibold">
                        {user.name}
                      </h2>
                    </div>

                  </div>
                </td>

                <td>{user.email}</td>

                <td>
                  <Chip color={roleColor[user.role]}>
                    {user.role}
                  </Chip>
                </td>

                <td>
                  <Chip color={statusColor[user.status]}>
                    {user.status}
                  </Chip>
                </td>

                <td>

                  <div className="flex justify-center gap-2">

                    <Button isIconOnly color="primary">
                      <FaEye />
                    </Button>

                    <Button isIconOnly color="warning">
                      <FaEdit />
                    </Button>

                    <Button isIconOnly color="danger">
                      <FaTrash />
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

        {users.map((user) => (

          <Card key={user.id} className="p-5">

            <div className="flex items-center gap-4">

              <Avatar
                src={user.image}
                className="w-14 h-14"
              />

              <div>
                <h2 className="font-bold">
                  {user.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {user.email}
                </p>
              </div>

            </div>

            <div className="flex justify-between mt-5">

              <Chip color={roleColor[user.role]}>
                {user.role}
              </Chip>

              <Chip color={statusColor[user.status]}>
                {user.status}
              </Chip>

            </div>

            <div className="grid grid-cols-3 gap-3 mt-5">

              <Button
                color="primary"
                startContent={<FaEye />}
              >
                View
              </Button>

              <Button
                color="warning"
                startContent={<FaEdit />}
              >
                Edit
              </Button>

              <Button
                color="danger"
                startContent={<FaTrash />}
              >
                Delete
              </Button>

            </div>

          </Card>

        ))}

      </div>

    </div>
  );
}