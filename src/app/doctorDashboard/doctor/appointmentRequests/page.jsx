"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Button } from "@heroui/react";
import { FaCheck, FaTimes, FaCheckCircle } from "react-icons/fa";

export default function AppointmentRequestsPage() {
  const router = useRouter();

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load Appointments
  const fetchAppointments = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointmentRequests`,
        {
          cache: "no-store",
        }
      );

      const data = await res.json();
      setAppointments(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Accept Appointment
  const handleAccept = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointmentRequests/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Accepted",
          }),
        }
      );

      const result = await res.json();

      if (result.modifiedCount > 0) {
        fetchAppointments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Reject Appointment
  const handleReject = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointmentRequests/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Rejected",
          }),
        }
      );

      const result = await res.json();

      if (result.modifiedCount > 0) {
        fetchAppointments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Complete Appointment
  const handleComplete = (id) => {
    router.push(`/dashboard/doctor/prescriptionManagement/${id}`);
  };

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
          <h2 className="text-2xl font-bold">Appointment Requests</h2>
          <p className="text-gray-500 text-sm">
            Manage patient appointments
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
                <th className="p-3 text-center">Actions</th>
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
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        app.status === "Accepted"
                          ? "bg-green-100 text-green-700"
                          : app.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : app.status === "Completed"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {app.status || "Pending"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <Button
                        size="sm"
                        color="success"
                        className="text-white"
                        startContent={<FaCheck />}
                        onPress={() => handleAccept(app._id)}
                        isDisabled={app.status === "Accepted"}
                      >
                        Accept
                      </Button>

                      <Button
                        size="sm"
                        color="danger"
                        startContent={<FaTimes />}
                        onPress={() => handleReject(app._id)}
                        isDisabled={app.status === "Rejected"}
                      >
                        Reject
                      </Button>

                      <Button
                        size="sm"
                        color="primary"
                        startContent={<FaCheckCircle />}
                        // onPress={() => handleComplete(app._id)}
                        // isDisabled={app.status !== "Accepted"}
                      >
                        Complete
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
                    No Appointment Found
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