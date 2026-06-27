"use client";

import { useRouter } from "next/navigation";
import { Card, Button, Avatar } from "@heroui/react";
import { FaCheck, FaTimes, FaCheckCircle } from "react-icons/fa";

export default function AppointmentRequestsPage() {
  const router = useRouter();

  const appointments = [
    {
      id: 1,
      name: "Md. Rahman",
      email: "rahman@example.com",
      phone: "+880 1234 567890",
      date: "24 May 2024",
      time: "10:00 AM",
      status: "Pending",
    },
  ];

  // ACTIONS
  const handleAccept = (id) => {
    console.log("Accepted:", id);
    // API call here
  };

  const handleReject = (id) => {
    console.log("Rejected:", id);
    // API call here
  };

  const handleComplete = (id) => {
    console.log("Completed:", id);

    // 👉 Navigate to prescription page
    router.push(`/dashboard/doctor/prescriptions/${id}`);
  };

  return (
    <div className="p-6">
      <Card className="w-full border shadow-lg rounded-2xl">

        {/* HEADER */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">Appointment Requests</h2>
          <p className="text-gray-500 text-sm">
            Manage patient appointments
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Patient</th>
                <th className="p-3 text-left">Contact</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((app) => (
                <tr key={app.id} className="border-t">

                  {/* Patient */}
                  <td className="p-3 flex items-center gap-3">
                    <Avatar name={app.name} size="sm" />
                    {app.name}
                  </td>

                  {/* Contact */}
                  <td className="p-3 text-xs text-gray-600">
                    <div>{app.email}</div>
                    <div>{app.phone}</div>
                  </td>

                  {/* Date */}
                  <td className="p-3">
                    {app.date} <br />
                    <span className="text-xs text-gray-500">{app.time}</span>
                  </td>

                  {/* Status */}
                  <td className="p-3">
                    <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700">
                      {app.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex gap-2 justify-center">

                      {/* ACCEPT */}
                      <Button
                        size="sm"
                        color="success"
                        className="text-white"
                        startContent={<FaCheck />}
                        onPress={() => handleAccept(app.id)}
                      >
                        Accept
                      </Button>

                      {/* REJECT */}
                      <Button
                        size="sm"
                        color="danger"
                        startContent={<FaTimes />}
                        onPress={() => handleReject(app.id)}
                      >
                        Reject
                      </Button>

                      {/* COMPLETE */}
                      <Button
                        size="sm"
                        color="primary"
                        startContent={<FaCheckCircle />}
                        onPress={() => handleComplete(app.id)}
                      >
                        Complete
                      </Button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </Card>
    </div>
  );
}