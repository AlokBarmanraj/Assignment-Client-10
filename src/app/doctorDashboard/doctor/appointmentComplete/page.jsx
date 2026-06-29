"use client";

import { useEffect, useState } from "react";
import { Card, Button } from "@heroui/react";
import { FaCheckCircle } from "react-icons/fa";

export default function AppointmentCompletePage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Demo Data (3–4 sample completed appointments)
  const demoData = [
    {
      _id: "1",
      patientName: "Rahim Uddin",
      gender: "Male",
      age: 32,
      email: "rahim@example.com",
      phone: "01712345678",
      appointmentDate: "2026-06-25",
      appointmentTime: "10:00 AM",
      status: "Completed",
    },
    {
      _id: "2",
      patientName: "Nusrat Jahan",
      gender: "Female",
      age: 28,
      email: "nusrat@example.com",
      phone: "01898765432",
      appointmentDate: "2026-06-24",
      appointmentTime: "11:30 AM",
      status: "Completed",
    },
    {
      _id: "3",
      patientName: "Karim Ahmed",
      gender: "Male",
      age: 45,
      email: "karim@example.com",
      phone: "01911223344",
      appointmentDate: "2026-06-23",
      appointmentTime: "02:00 PM",
      status: "Completed",
    },
    {
      _id: "4",
      patientName: "Sonia Akter",
      gender: "Female",
      age: 30,
      email: "sonia@example.com",
      phone: "01655667788",
      appointmentDate: "2026-06-22",
      appointmentTime: "04:15 PM",
      status: "Completed",
    },
  ];

  useEffect(() => {
    // fake loading effect
    setTimeout(() => {
      setAppointments(demoData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60 text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6">
      <Card className="w-full shadow-lg rounded-2xl border">
        {/* Header */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">Completed Appointments</h2>
          <p className="text-gray-500 text-sm">
            All completed patient appointments
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="p-3 text-left">Patient</th>
                <th className="p-3 text-left">Contact</th>
                <th className="p-3 text-left">Appointment</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((app) => (
                <tr key={app._id} className="border-t">
                  {/* Patient */}
                  <td className="p-3">
                    <h3 className="font-semibold">{app.patientName}</h3>
                    <p className="text-xs text-gray-500">
                      {app.gender} | {app.age} Years
                    </p>
                  </td>

                  {/* Contact */}
                  <td className="p-3">
                    <div>{app.email}</div>
                    <div>{app.phone}</div>
                  </td>

                  {/* Appointment */}
                  <td className="p-3">
                    <div>{app.appointmentDate}</div>
                    <div className="text-xs text-gray-500">
                      {app.appointmentTime}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {app.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="p-3">
                    <div className="flex justify-center">
                      <Button
                        size="sm"
                        color="primary"
                        startContent={<FaCheckCircle />}
                        isDisabled
                      >
                        Completed
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}

              {appointments.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-10 text-gray-500"
                  >
                    No Completed Appointment Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}