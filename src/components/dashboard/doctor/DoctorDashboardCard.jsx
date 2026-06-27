"use client";

import {
  FaUsers,
  FaCalendarCheck,
  FaStar,
} from "react-icons/fa";

const statsData = [
  {
    title: "Total Patients",
    value: 1250,
    icon: FaUsers,
    color: "#3b82f6", // Blue
    progress: "80%",
  },
  {
    title: "Today's Appointments",
    value: 24,
    icon: FaCalendarCheck,
    color: "#10b981", // Green
    progress: "65%",
  },
  {
    title: "Reviews Received",
    value: 356,
    icon: FaStar,
    color: "#f59e0b", // Yellow
    progress: "90%",
  },
];

export default function DoctorDashboardCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-4">
      {statsData.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              rounded-2xl
              border
              border-zinc-200
              dark:border-zinc-800
              bg-zinc-50
              dark:bg-zinc-900
              p-6
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            <div className="flex items-start justify-between">
              <div
                className="w-16 h-16 rounded-full border-4 flex items-center justify-center"
                style={{ borderColor: item.color }}
              >
                <Icon
                  size={28}
                  style={{ color: item.color }}
                />
              </div>

              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {item.value}
              </h2>
            </div>

            <h3 className="mt-6 text-lg font-medium text-zinc-600 dark:text-zinc-400">
              {item.title}
            </h3>

            <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: item.progress,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}