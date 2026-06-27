"use client";
import AppointmentTable from "@/components/dashboard/patient/AppointmentTable";
import DashboardCards from "@/components/dashboard/patient/DashboardCards";
import { useSession } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import React from "react";

const PatientDashboardPage = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Spinner size="lg" />
          <span className="text-xs text-muted">Loading...</span>
        </div>
      </div>
    );
  }
  const user = session?.user;
  return (
    <div className="mt-2.5 pl-2.5">
      <h1 className="font-bold text-3xl">Welcome, {user?.name} ! </h1>
      <DashboardCards></DashboardCards>
      <AppointmentTable></AppointmentTable>
    </div>
  );
};

export default PatientDashboardPage;
