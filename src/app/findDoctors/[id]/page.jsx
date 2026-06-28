import DoctorDetailsCard from "@/components/findDoctor/DoctorDetailsCard";
import React from "react";

const DoctorDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(`http://localhost:5000/api/findDoctors/${id}`, {
    cache: "no-store",
  });

  const doctorData = await res.json();
  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      <DoctorDetailsCard doctorData={doctorData} />
    </div>
  );
};

export default DoctorDetails;
