"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

import { Card } from "@heroui/react";


const appointmentData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 60 },
  { month: "Mar", value: 80 },
  { month: "Apr", value: 55 },
  { month: "May", value: 90 },
  { month: "Jun", value: 75 },
];

const revenueData = [
  { month: "Jan", value: 2000 },
  { month: "Feb", value: 3500 },
  { month: "Mar", value: 2800 },
  { month: "Apr", value: 4200 },
  { month: "May", value: 5000 },
  { month: "Jun", value: 6100 },
];

const statusData = [
  { name: "Completed", value: 65 },
  { name: "Pending", value: 25 },
  { name: "Cancelled", value: 10 },
];

const departmentData = [
  { name: "Cardiology", value: 30 },
  { name: "Dental", value: 20 },
  { name: "Neurology", value: 25 },
  { name: "Medicine", value: 25 },
];

const weeklyData = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 50 },
  { day: "Wed", value: 40 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 90 },
  { day: "Sun", value: 65 },
];

const topDoctors = [
  { name: "Dr. Alex", value: 120 },
  { name: "Dr. John", value: 90 },
  { name: "Dr. Smith", value: 70 },
  { name: "Dr. David", value: 50 },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444", "#3b82f6"];


export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">

      {/* 1. Monthly Appointments (Bar) */}
      <Card className="p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Monthly Appointments</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={appointmentData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* 2. Monthly Revenue (Area) */}
      <Card className="p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              fill="#22c55e33"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* 3. Appointment Status (Doughnut) */}
      <Card className="p-6 shadow-xl flex items-center justify-center">
        <div className="w-full">
          <h2 className="text-xl font-bold mb-4">Appointment Status</h2>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                innerRadius={60}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 4. Department Distribution (Pie) */}
      <Card className="p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Department Distribution</h2>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={departmentData}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {departmentData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      {/* 5. Weekly Patients (Line) */}
      <Card className="p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Weekly Patients</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* 6. Top Doctors (Horizontal Bar) */}
      <Card className="p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Top Doctors</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topDoctors} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

    </div>
  );
}