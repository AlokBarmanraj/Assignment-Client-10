"use client";

import {
  FaCalendarCheck,
  FaHistory,
  FaMoneyBillWave,
  FaHeart,
} from "react-icons/fa";

const statsData = [
  {
    title: "Upcoming Appointments",
    value: 12,
    icon: FaCalendarCheck,
    color: "#06b6d4",
    progress: "55%",
  },
  {
    title: "Appointment History",
    value: 148,
    icon: FaHistory,
    color: "#65a30d",
    progress: "65%",
  },
  {
    title: "Total Payments",
    value: "$2,450",
    icon: FaMoneyBillWave,
    color: "#ef4444",
    progress: "50%",
  },
  {
    title: "Favorite Doctors",
    value: 8,
    icon: FaHeart,
    color: "#f59e0b",
    progress: "60%",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full mt-3.5">
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
              w-full
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