
// "use client"
// import AppointmentDoctor from '@/components/findDoctor/AppointmentDoctor';
// import { authClient } from '@/lib/auth-client';
// import React from 'react';

// const AppointmentPage = () => {
//     return (
//         <div>
//             <AppointmentDoctor doctorData={doctorData}></AppointmentDoctor>
//         </div>
//     );
// };

// export default AppointmentPage;



import AppointmentDoctor from "@/components/findDoctor/AppointmentDoctor";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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

  const doctorData = await res.json();

  return <AppointmentDoctor doctorData={doctorData} />;
}