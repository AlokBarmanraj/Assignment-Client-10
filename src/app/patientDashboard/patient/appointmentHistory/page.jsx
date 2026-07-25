"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Chip,
  Input,
  Spinner,
} from "@heroui/react";

import {
  FaSearch,
  FaEye,
  FaCalendarAlt,
  FaTrash,
  FaUserMd,
  FaHospital,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function MyAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/myAppointments`)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredAppointments = useMemo(() => {
    return appointments.filter((item) =>
      item.doctorName.toLowerCase().includes(search.toLowerCase())
    );
  }, [appointments, search]);

  const total = appointments.length;

  const confirmed = appointments.filter(
    (item) => item.status === "Confirmed"
  ).length;

  const cancelled = appointments.filter(
    (item) => item.status === "Cancelled"
  ).length;

  const rescheduled = appointments.filter(
    (item) => item.status === "Rescheduled"
  ).length;

  const statusColor = {
    Confirmed: "success",
    Pending: "warning",
    Cancelled: "danger",
    Rescheduled: "secondary",
    Completed: "primary",
  };

  const handleView = (appointment) => {
    console.log("View", appointment);
  };

  const handleCancel = (appointment) => {
    console.log("Cancel", appointment);
  };

  const handleReschedule = (appointment) => {
    console.log("Reschedule", appointment);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 p-6">

      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            My Appointments
          </h1>

          <p className="text-default-500 mt-2">
            View, cancel and reschedule your appointments.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <Card className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <p>Total</p>
              <h2 className="text-3xl font-bold">
                {total}
              </h2>
            </div>

            <FaCalendarCheck className="text-5xl text-blue-500" />
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <p>Confirmed</p>
              <h2 className="text-3xl font-bold text-green-500">
                {confirmed}
              </h2>
            </div>

            <FaCheckCircle className="text-5xl text-green-500" />
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <p>Rescheduled</p>
              <h2 className="text-3xl font-bold text-yellow-500">
                {rescheduled}
              </h2>
            </div>

            <FaClock className="text-5xl text-yellow-500" />
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <p>Cancelled</p>
              <h2 className="text-3xl font-bold text-red-500">
                {cancelled}
              </h2>
            </div>

            <FaTimesCircle className="text-5xl text-red-500" />
          </div>
        </Card>

      </div>

      <Card className="hidden lg:block overflow-x-auto">

        <table className="w-full">

          <thead className="bg-default-100">

            <tr>

              <th className="text-left p-4">Doctor</th>

              <th>Specialization</th>

              <th>Hospital</th>

              <th>Date</th>

              <th>Time</th>

              <th>Fee</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredAppointments.map((item) => (

              <tr
                key={item._id}
                className="border-b dark:border-zinc-800 hover:bg-default-50"
              >

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <Avatar src={item.doctorImage} />

                    <div>

                      <h3 className="font-semibold">
                        {item.doctorName}
                      </h3>

                    </div>

                  </div>

                </td>

                <td>{item.specialization}</td>

                <td>{item.hospitalName}</td>

                <td>{item.appointmentDate}</td>

                <td>{item.appointmentTime}</td>

                <td>৳ {item.consultationFee}</td>

                <td>

                  <Chip color={statusColor[item.status]}>
                    {item.status}
                  </Chip>

                </td>

                <td>

                  <div className="flex justify-center gap-2">

                    <Button
                      isIconOnly
                      color="primary"
                      onPress={() => handleView(item)}
                    >
                      <FaEye />
                    </Button>

                    <Button
                      isIconOnly
                      color="warning"
                      onPress={() => handleReschedule(item)}
                    >
                      <FaCalendarAlt />
                    </Button>

                    <Button
                      isIconOnly
                      color="danger"
                      onPress={() => handleCancel(item)}
                    >
                      <FaTrash />
                    </Button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </Card>

      <div className="grid gap-5 lg:hidden">

        {filteredAppointments.map((item) => (

          <Card
            key={item._id}
            className="p-5"
          >

            <div className="flex gap-4">

              <Avatar
                src={item.doctorImage}
                className="w-20 h-20"
              />

              <div className="flex-1">

                <h2 className="font-bold text-lg">
                  {item.doctorName}
                </h2>

                <p className="flex items-center gap-2 text-sm mt-1">
                  <FaUserMd />
                  {item.specialization}
                </p>

                <p className="flex items-center gap-2 text-sm mt-1">
                  <FaHospital />
                  {item.hospitalName}
                </p>

                <p className="text-sm mt-2">
                  📅 {item.appointmentDate}
                </p>

                <p className="text-sm">
                  🕒 {item.appointmentTime}
                </p>

                <p className="flex items-center gap-2 mt-2">
                  <FaMoneyBillWave />
                  ৳ {item.consultationFee}
                </p>

                <Chip
                  className="mt-3"
                  color={statusColor[item.status]}
                >
                  {item.status}
                </Chip>

              </div>

            </div>

            <div className="grid grid-cols-3 gap-2 mt-5">

              <Button
                color="primary"
                onPress={() => handleView(item)}
              >
                <FaEye />
              </Button>

              <Button
                color="warning"
                onPress={() => handleReschedule(item)}
              >
                <FaCalendarAlt />
              </Button>

              <Button
                color="danger"
                onPress={() => handleCancel(item)}
              >
                <FaTrash />
              </Button>

            </div>

          </Card>

        ))}

      </div>

      {!loading && filteredAppointments.length === 0 && (
        <Card className="p-10 mt-8 text-center">
          <h2 className="text-2xl font-bold">
            No Appointment Found
          </h2>

          <p className="text-default-500 mt-2">
            You haven't booked any appointments yet.
          </p>
        </Card>
      )}

    </div>
  );
}