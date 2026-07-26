"use client";

import { FaUsers, FaCalendarCheck, FaStar } from "react-icons/fa";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const statsData = [
  {
    title: "Total Patients",
    value: 1250,
    icon: FaUsers,
    color: "#3b82f6",
  },
  {
    title: "Today's Appointments",
    value: 24,
    icon: FaCalendarCheck,
    color: "#10b981",
  },
  {
    title: "Reviews Received",
    value: 356,
    icon: FaStar,
    color: "#f59e0b",
  },
];

const lineData = [
  { day: "Mon", appointment: 4 },
  { day: "Tue", appointment: 8 },
  { day: "Wed", appointment: 6 },
  { day: "Thu", appointment: 10 },
  { day: "Fri", appointment: 7 },
  { day: "Sat", appointment: 11 },
  { day: "Sun", appointment: 9 },
];

const pieData = [
  { name: "Completed", value: 45 },
  { name: "Pending", value: 20 },
  { name: "Cancelled", value: 10 },
];

const COLORS = ["#10b981", "#3b82f6", "#ef4444"];

const barData = [
  { month: "Jan", patient: 20 },
  { month: "Feb", patient: 30 },
  { month: "Mar", patient: 40 },
  { month: "Apr", patient: 55 },
  { month: "May", patient: 70 },
  { month: "Jun", patient: 82 },
];

export default function DoctorDashboard() {
  return (
    <div className="space-y-8">
      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {statsData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow border dark:border-zinc-800 p-6"
            >
              <div className="flex justify-between items-center">
                <div
                  className="w-16 h-16 rounded-full border-4 flex items-center justify-center"
                  style={{
                    borderColor: item.color,
                  }}
                >
                  <Icon size={30} color={item.color} />
                </div>

                <h2 className="text-4xl font-bold">{item.value}</h2>
              </div>

              <p className="mt-6 text-lg text-zinc-500">{item.title}</p>
            </div>
          );
        })}
      </div>

      {/* First Row */}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Line Chart */}

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-bold mb-5">Weekly Appointment Trend</h2>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="appointment"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow">
          <h2 className="text-xl font-bold mb-5">Appointment Status</h2>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={100} label>
                {pieData.map((item, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}

      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow">
        <h2 className="text-xl font-bold mb-5">Monthly Patient Growth</h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar dataKey="patient" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
