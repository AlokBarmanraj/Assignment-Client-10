import { DoctorDashboardSidebar } from "@/components/dashboard/DoctorDashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full flex min-h-screen">
      <DoctorDashboardSidebar></DoctorDashboardSidebar>
      <div className="flex-1 w-full p-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;
