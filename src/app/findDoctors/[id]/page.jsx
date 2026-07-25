// import DoctorDetailsCard from "@/components/findDoctor/DoctorDetailsCard";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
// import React from "react";
// export const metadata = {
//   title: "Doctor | Details",
// };

// const DoctorDetails = async ({ params }) => {
//   const { id } = await params;
//   const {token} = await auth.api.getToken({
//     headers:await headers()
//   })
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/findDoctors/${id}`, {
//     headers:{
//       authorization:`Bearer ${token}`
//     },
//   });
//   const doctorData = await res.json();
//   return (
//     <div className="max-w-7xl mx-auto mt-16 px-4">
//       <DoctorDetailsCard doctorData={doctorData} id={id}/>
//     </div>
//   );
// };

// export default DoctorDetails;




import AppointmentDoctor from "@/components/findDoctor/AppointmentDoctor";
import DoctorDetailsCard from "@/components/findDoctor/DoctorDetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "Book Appointment",
};

export default async function AppointmentPage({ params }) {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/findDoctors/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return <h1>Doctor not found</h1>;
  }

  const doctorData = await res.json();

  if (!doctorData) {
    return <h1>Doctor not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10">
      <DoctorDetailsCard doctorData={doctorData} id={id} />
    </div>
  );
}

