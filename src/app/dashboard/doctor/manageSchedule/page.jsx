"use client";

import ScheduleTable from "@/components/dashboard/schedule/ScheduleTable";
import AddScheduleModal from "@/components/dashboard/schedule/AddScheduleModal";

export default function ManageSchedulePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manage Schedule</h1>

          <p className="mt-2 text-default-500">
            Manage your weekly schedule and appointment slots.
          </p>
        </div>

        <AddScheduleModal />
      </div>

      {/* Table */}
      <ScheduleTable />
    </div>
  );
}
