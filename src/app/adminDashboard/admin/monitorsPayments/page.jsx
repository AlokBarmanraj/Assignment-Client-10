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
  FaEye,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

export default function MonitorsPaymentsPage() {
  const [payments] = useState([
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Sarah Ahmed",
      amount: "$120",
      method: "Card",
      date: "30 Jun 2026",
      status: "Paid",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      patient: "Alex Smith",
      doctor: "Dr. Emily",
      amount: "$90",
      method: "Bkash",
      date: "01 Jul 2026",
      status: "Pending",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      patient: "Michael",
      doctor: "Dr. John",
      amount: "$150",
      method: "Nagad",
      date: "02 Jul 2026",
      status: "Failed",
      image: "https://i.pravatar.cc/150?img=3",
    },
  ]);

  const statusColor = {
    Paid: "success",
    Pending: "warning",
    Failed: "danger",
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Monitor Payments
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Track and manage all payment transactions.
          </p>
        </div>

        <Button color="primary">
          Payment History
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">

        <Card className="p-6 bg-white dark:bg-zinc-900">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Payments</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                320
              </h2>
            </div>
            <FaMoneyBillWave className="text-5xl text-blue-500" />
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-zinc-900">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Paid</p>
              <h2 className="text-3xl font-bold text-green-500">
                280
              </h2>
            </div>
            <FaCheckCircle className="text-5xl text-green-500" />
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-zinc-900">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Pending</p>
              <h2 className="text-3xl font-bold text-yellow-500">
                28
              </h2>
            </div>
            <FaClock className="text-5xl text-yellow-500" />
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-zinc-900">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Failed</p>
              <h2 className="text-3xl font-bold text-red-500">
                12
              </h2>
            </div>
            <FaTimesCircle className="text-5xl text-red-500" />
          </div>
        </Card>

      </div>

      {/* Desktop Table */}
      <Card className="hidden lg:block bg-white dark:bg-zinc-900 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100 dark:bg-zinc-800">
            <tr>
              <th className="p-4 text-left">Patient</th>
              <th>Doctor</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr
                key={payment.id}
                className="border-b dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar src={payment.image} />
                    <h2 className="font-semibold text-gray-900 dark:text-white">
                      {payment.patient}
                    </h2>
                  </div>
                </td>

                <td>{payment.doctor}</td>

                <td className="font-semibold text-primary">
                  {payment.amount}
                </td>

                <td>{payment.method}</td>

                <td>{payment.date}</td>

                <td>
                  <Chip color={statusColor[payment.status]}>
                    {payment.status}
                  </Chip>
                </td>

                <td>
                  <div className="flex justify-center">
                    <Button isIconOnly color="primary">
                      <FaEye />
                    </Button>
                  </div>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </Card>

      {/* Mobile View */}
      <div className="grid gap-5 lg:hidden">

        {payments.map((payment) => (

          <Card
            key={payment.id}
            className="p-5 bg-white dark:bg-zinc-900"
          >

            <div className="flex items-center gap-4">

              <Avatar
                src={payment.image}
                className="w-16 h-16"
              />

              <div>
                <h2 className="font-bold text-gray-900 dark:text-white">
                  {payment.patient}
                </h2>

                <p className="text-sm text-gray-500">
                  {payment.doctor}
                </p>

                <p className="font-semibold text-primary mt-1">
                  {payment.amount}
                </p>

                <p className="text-sm">
                  {payment.method}
                </p>

                <Chip
                  className="mt-2"
                  color={statusColor[payment.status]}
                >
                  {payment.status}
                </Chip>
              </div>

            </div>

            <div className="mt-5">
              <Button
                color="primary"
                className="w-full"
              >
                <FaEye />
                View Details
              </Button>
            </div>

          </Card>

        ))}

      </div>

    </div>
  );
}