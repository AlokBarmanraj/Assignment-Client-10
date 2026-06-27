import { AdminDashboardSidebar } from "@/components/dashboard/AdminDashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full flex min-h-screen">
      <AdminDashboardSidebar></AdminDashboardSidebar>
      <div className="flex-1 w-full p-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;
