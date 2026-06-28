// "use client";

// import DoctorProfileCard from "@/components/dashboard/doctorProfile/DoctorProfileCard";
// import DoctorProfileModal from "@/components/dashboard/doctorProfile/DoctorProfileModal";
// import { getDoctorList } from "@/lib/api/doctorList";
// import { useEffect, useState } from "react";

// export default function DoctorCreatePage() {
//    const [doctors, setDoctors] = useState([]);
//      useEffect(() => {
//     const fetchData = async () => {
//       const data = await getDoctorList();
//       setDoctors(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="mx-auto max-w-7xl space-y-6 p-6">
//       <div className="flex justify-end">
//         <DoctorProfileModal></DoctorProfileModal>
//       </div>

//    <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-1">
//       {doctors.map((doctor) => (
//         <DoctorProfileCard
//           key={doctor._id}
//           doctor={doctor}
//         />
//       ))}
//     </div>
//     </div>
//   );
// }

// "use client";

// import DoctorProfileModal from "@/components/dashboard/doctorProfile/DoctorProfileModal";
// import DoctorProfileTable from "@/components/dashboard/doctorProfile/DoctorProfileTable";
// import { getDoctorList } from "@/lib/api/doctorList";
// import { useEffect, useState } from "react";

// export default function DoctorCreatePage() {
//   const [doctor, setDoctors] = useState([]);

//   const fetchData = async () => {
//     const data = await getDoctorList();
//     setDoctors(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="mx-auto max-w-7xl space-y-6 p-6">
//       <div className="flex justify-end">
//         <DoctorProfileModal onSuccess={fetchData} />
//       </div>

//       <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-1">
//         {/* {doctors.map((doctor) => (
//           <DoctorTable
//             key={doctor._id}
//             doctor={doctor}
//             refreshDoctor={fetchData}
//           />
//         ))} */}
//         <DoctorProfileTable doctor={doctor} refreshDoctor={fetchData}></DoctorProfileTable>
//       </div>
//     </div>
//   );
// }






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
      <div className="flex justify-end">
        <DoctorProfileModal onSuccess={fetchData} />
      </div>

      <DoctorProfileTable
        doctors={doctors}
        refreshDoctor={fetchData}
      />
    </div>
  );
}