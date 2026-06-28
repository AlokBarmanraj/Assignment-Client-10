// "use client";

// import { Card, Chip } from "@heroui/react";
// import Image from "next/image";
// import {
//   FaUserMd,
//   FaHospital,
//   FaMoneyBillWave,
//   FaClock,
//   FaCalendarAlt,
//   FaGraduationCap,
//   FaBriefcaseMedical,
//   FaEdit,
//   FaCheckCircle,
// } from "react-icons/fa";
// import DoctorProfileEdit from "./DoctorProfileEdit";

// export default function DoctorProfileCard({ doctor, refreshDoctor }) {
//   return (
//     <Card
//       className="
//         w-full
//         overflow-hidden
//         rounded-3xl
//         border
//         border-default-200
//         dark:border-default-700
//         bg-white
//         dark:bg-zinc-900
//         shadow-xl
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:shadow-2xl
//       "
//     >
//       <div className="flex flex-col lg:flex-row">
//         {/* Left Side */}
//         <div
//           className="
//             relative
//             flex
//             w-full
//             flex-col
//             items-center
//             justify-center
//             gap-5
//             bg-gradient-to-br
//             from-blue-600
//             via-sky-600
//             to-cyan-500
//             px-8
//             py-10
//             text-white
//             lg:w-80
//           "
//         >
//           <Image
//             src={doctor.profileImage}
//             width={200}
//             height={100}
//             alt={doctor.doctorName}
//             className="
//               h-28
//               w-28
//               rounded-full
//               border-4
//               border-white
//               object-cover
//               shadow-2xl
//               transition
//               duration-300
//               hover:scale-105
//               sm:h-32
//               sm:w-32
//               lg:h-40
//               lg:w-40
//             "
//           />

//           <div className="text-center">
//             <h2 className="text-2xl font-bold lg:text-3xl">
//               {doctor.doctorName}
//             </h2>

//             <p className="mt-2 text-sm capitalize text-white/90 lg:text-base">
//               {doctor.specialization}
//             </p>
//           </div>

//           <Chip
//             color="success"
//             variant="flat"
//             className="flex items-center gap-1 font-semibold"
//           >
//             <FaCheckCircle />
//             {doctor.verificationStatus}
//           </Chip>
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
//           <div>
//             <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-default-900 dark:text-white">
//               <FaUserMd className="text-primary" />
//               Doctor Information
//             </h3>

//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               {/* Qualification */}

//               <div className="flex items-center gap-4 rounded-2xl border border-default-200 bg-default-100/80 p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-default-700 dark:bg-default-100/5">
//                 <FaGraduationCap className="text-2xl text-primary" />

//                 <div>
//                   <p className="text-xs text-default-500 dark:text-default-400">
//                     Qualification
//                   </p>

//                   <h4 className="font-semibold text-default-900 dark:text-white">
//                     {doctor.qualifications}
//                   </h4>
//                 </div>
//               </div>

//               {/* Experience */}

//               <div className="flex items-center gap-4 rounded-2xl border border-default-200 bg-default-100/80 p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-default-700 dark:bg-default-100/5">
//                 <FaBriefcaseMedical className="text-2xl text-success" />

//                 <div>
//                   <p className="text-xs text-default-500 dark:text-default-400">
//                     Experience
//                   </p>

//                   <h4 className="font-semibold text-default-900 dark:text-white">
//                     {doctor.experience} Years
//                   </h4>
//                 </div>
//               </div>

//               {/* Fee */}

//               <div className="flex items-center gap-4 rounded-2xl border border-default-200 bg-default-100/80 p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-default-700 dark:bg-default-100/5">
//                 <FaMoneyBillWave className="text-2xl text-warning" />

//                 <div>
//                   <p className="text-xs text-default-500 dark:text-default-400">
//                     Consultation Fee
//                   </p>

//                   <h4 className="font-semibold text-default-900 dark:text-white">
//                     ৳ {doctor.consultationFee}
//                   </h4>
//                 </div>
//               </div>

//               {/* Hospital */}

//               <div className="flex items-center gap-4 rounded-2xl border border-default-200 bg-default-100/80 p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-default-700 dark:bg-default-100/5">
//                 <FaHospital className="text-2xl text-danger" />

//                 <div>
//                   <p className="text-xs text-default-500 dark:text-default-400">
//                     Hospital
//                   </p>

//                   <h4 className="font-semibold text-default-900 dark:text-white">
//                     {doctor.hospitalName}
//                   </h4>
//                 </div>
//               </div>

//               {/* Available Day */}

//               <div className="flex items-center gap-4 rounded-2xl border border-default-200 bg-default-100/80 p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-default-700 dark:bg-default-100/5">
//                 <FaCalendarAlt className="text-2xl text-secondary" />

//                 <div>
//                   <p className="text-xs text-default-500 dark:text-default-400">
//                     Available Day
//                   </p>

//                   <h4 className="font-semibold capitalize text-default-900 dark:text-white">
//                     {doctor.availableDays}
//                   </h4>
//                 </div>
//               </div>

//               {/* Available Time */}

//               <div className="flex items-center gap-4 rounded-2xl border border-default-200 bg-default-100/80 p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-default-700 dark:bg-default-100/5">
//                 <FaClock className="text-2xl text-primary" />

//                 <div>
//                   <p className="text-xs text-default-500 dark:text-default-400">
//                     Available Time
//                   </p>

//                   <h4 className="font-semibold text-default-900 dark:text-white">
//                     {doctor.startTime} - {doctor.endTime}
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Button */}

//           <div className="mt-8 flex justify-center lg:justify-end">
//             <DoctorProfileEdit
//               doctor={doctor}
//               onSuccess={refreshDoctor}
//             ></DoctorProfileEdit>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }

"use client";

import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import DoctorProfileEdit from "./DoctorProfileEdit";
import { FaEye, FaTrash, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import DoctorProfileDelete from "./DoctorProfileDelete";
import DoctorProfileView from "./DoctorProfileView";

export default function DoctorProfileTable({ doctors = [], refreshDoctor }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-default-200 bg-white shadow-lg dark:border-default-700 dark:bg-zinc-900">
      <table className="w-full min-w-[900px]">
        {/* Table Header */}
        <thead className="border-b border-default-200 bg-default-100 dark:border-default-700 dark:bg-zinc-800">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-default-700 dark:text-default-200">
              Doctor
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-default-700 dark:text-default-200">
              Specialist
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-default-700 dark:text-default-200">
              Schedule
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-default-700 dark:text-default-200">
              Fee
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-default-700 dark:text-default-200">
              Actions
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {doctors.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-10 text-center text-default-500 dark:text-default-400"
              >
                No doctors found.
              </td>
            </tr>
          ) : (
            doctors.map((doctor) => (
              <tr
                key={doctor._id}
                className="border-b border-default-200 transition hover:bg-default-100/60 dark:border-default-700 dark:hover:bg-zinc-800"
              >
                {/* Doctor */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={doctor.profileImage}
                      alt={doctor.doctorName}
                      width={52}
                      height={52}
                      className="h-13 w-13 rounded-full border-2 border-default-300 object-cover dark:border-default-600"
                    />

                    <div>
                      <h4 className="font-semibold text-default-900 dark:text-white">
                        {doctor.doctorName}
                      </h4>

                      <p className="text-sm text-default-500 dark:text-default-400">
                        {doctor.qualifications}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Specialist */}
                <td className="px-6 py-4">
                  <Chip color="primary" variant="flat">
                    {doctor.specialization}
                  </Chip>
                </td>

                {/* Schedule */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-default-700 dark:text-default-300">
                    <FaCalendarAlt className="text-primary" />
                    {doctor.availableDays}
                  </div>

                  <p className="mt-1 text-sm text-default-500 dark:text-default-400">
                    {doctor.startTime} - {doctor.endTime}
                  </p>
                </td>

                {/* Fee */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 font-semibold text-success">
                    <FaMoneyBillWave />৳ {doctor.consultationFee}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    {/* View */}
                    <DoctorProfileView doctor={doctor}></DoctorProfileView>
                    {/* Edit */}
                    <DoctorProfileEdit
                      doctor={doctor}
                      onSuccess={refreshDoctor}
                    ></DoctorProfileEdit>
                    {/* Delete */}
                    <DoctorProfileDelete
                      doctor={doctor}
                      onSuccess={refreshDoctor}
                    ></DoctorProfileDelete>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
