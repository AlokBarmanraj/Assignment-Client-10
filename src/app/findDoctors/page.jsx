"use client";

import { useEffect, useState } from "react";
import DoctorProfileCard from "./DoctorProfileCard";
import { getDoctorList } from "@/lib/actions/getDoctorList";

export default function DoctorListPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDoctorList();
      setDoctors(data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2">
      {doctors.map((doctor) => (
        <DoctorProfileCard
          key={doctor._id}
          doctor={doctor}
          onEdit={(doc) => console.log("Edit:", doc)}
        />
      ))}
    </div>
  );
}