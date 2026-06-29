"use client";

import { useEffect, useState } from "react";
import DoctorProfileModal from "@/components/dashboard/doctorProfile/DoctorProfileModal";
import DoctorProfileTable from "@/components/dashboard/doctorProfile/DoctorProfileTable";
import { getDoctorList } from "@/lib/api/doctorList";

export default function DoctorCreatePage() {
  const [doctors, setDoctors] = useState([]);

  const fetchData = async () => {
    const data = await getDoctorList();
    setDoctors(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Create Doctor Profile
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          View all Doctor Profile.
        </p>
      </div>
      <div className="flex justify-end">
        <DoctorProfileModal onSuccess={fetchData} />
      </div>

      <DoctorProfileTable doctors={doctors} refreshDoctor={fetchData} />
    </div>
  );
}
