// "use client";

// import { useEffect, useState } from "react";
// import DoctorProfileModal from "@/components/dashboard/doctorProfile/DoctorProfileModal";
// import DoctorProfileTable from "@/components/dashboard/doctorProfile/DoctorProfileTable";
// import { getDoctorList } from "@/lib/api/doctorList";

// export default function DoctorCreatePage() {
//   const [doctors, setDoctors] = useState([]);

//   const fetchData = async () => {
//     const data = await getDoctorList();
//     setDoctors(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="mx-auto max-w-7xl space-y-6 p-6">
//       <div>
//         <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
//           Create Doctor Profile
//         </h1>

//         <p className="text-gray-500 dark:text-gray-400 mt-2">
//           View all Doctor Profile.
//         </p>
//       </div>
//       <div className="flex justify-end">
//         <DoctorProfileModal onSuccess={fetchData} />
//       </div>

//       <DoctorProfileTable doctors={doctors} refreshDoctor={fetchData} />
//     </div>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "@/lib/auth-client";

// import DoctorProfileModal from "@/components/dashboard/doctorProfile/DoctorProfileModal";
// import DoctorProfileTable from "@/components/dashboard/doctorProfile/DoctorProfileTable";
// import { getDoctorList } from "@/lib/api/doctorList";

// export default function DoctorCreatePage() {
//   const { data: session } = useSession();

//   const [doctors, setDoctors] = useState([]);

//   const fetchData = async () => {
//     if (!session?.user?.email) return;

//     // const data = await getDoctorList(session.user.email);
//     // setDoctors(data);
//     const data = await getDoctorList(session.user.email);
//     setDoctors(data);
//     console.log(session?.user?.email);
//   };

//   useEffect(() => {
//     if (session?.user?.email) {
//       fetchData();
//     }
//   }, [session]);

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold">Create Doctor Profile</h1>

//           <p className="text-gray-500 dark:text-gray-400 mt-2">
//             View My Doctor Profile.
//           </p>
//         </div>

//         <DoctorProfileModal onSuccess={fetchData} />
//       </div>

//       <DoctorProfileTable doctors={doctors} refreshDoctor={fetchData} />
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import DoctorProfileModal from "@/components/dashboard/doctorProfile/DoctorProfileModal";
import DoctorProfileTable from "@/components/dashboard/doctorProfile/DoctorProfileTable";
import { getDoctorList } from "@/lib/api/doctorList";
export default function DoctorCreatePage() {
  const { data: session } = useSession();
  const [doctors, setDoctors] = useState([]);
  // const fetchData = async () => {
  //   if (!session?.user?.id) return;
  //   const data = await getDoctorList(session.user.id);
  //   console.log("Session ID:", session?.user?.id);
  //   setDoctors(data);
  // };
  const fetchData = async () => {
  // console.log("Session:", session);

  if (!session?.user?.id) {
    // console.log("No doctor id");
    return;
  }

  // console.log("Doctor ID:", session.user.id);

  const data = await getDoctorList(session.user.id);

  // console.log("API Data:", data);

  setDoctors(data);
};
  useEffect(() => {
    if (session?.user?.id) {
      fetchData();
    }
  }, [session]);
  return (
    <div className="space-y-6">
      {" "}
      <div className="flex items-center justify-between">
        {" "}
        <div>
          {" "}
          <h1 className="text-3xl font-bold">Create Doctor Profile</h1>{" "}
          <p className="text-gray-500 mt-2"> View My Doctor Profile. </p>{" "}
        </div>{" "}
        <DoctorProfileModal onSuccess={fetchData} />{" "}
      </div>{" "}
      <DoctorProfileTable doctors={doctors} refreshDoctor={fetchData} />{" "}
    </div>
  );
}
