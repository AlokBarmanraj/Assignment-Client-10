import DoctorDetailsCard from "@/components/findDoctor/DoctorDetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
export const metadata = {
  title: "Doctor | Details",
};

const DoctorDetails = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers:await headers()
  })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/findDoctors/${id}`, {
    headers:{
      authorization:`Bearer ${token}`
    },
  });
  const doctorData = await res.json();
  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      <DoctorDetailsCard doctorData={doctorData} id={id}/>
    </div>
  );
};

export default DoctorDetails;
