// "use client";

// import { useState } from "react";
// import { Avatar, Button, Card, Chip } from "@heroui/react";
// import {
//   FaCamera,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import Image from "next/image";

// export default function ProfilePage() {
//   const [user] = useState({
//     name: "John Doe",
//     email: "john@gmail.com",
//     phone: "+8801712345678",
//     role: "Patient",
//     address: "Dhaka, Bangladesh",
//     joined: "12 January 2025",
//     bio: "Passionate about maintaining a healthy lifestyle and regularly booking doctor appointments.",
//     image: "https://randomuser.me/api/portraits/men/37.jpg",
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 p-6 flex justify-center">
//       <Card className="w-full max-w-3xl p-8 bg-white dark:bg-zinc-900 shadow-xl rounded-2xl">
//         {/* Avatar Section */}
//         <div className="flex flex-col items-center">
//             <Image
//               src={user.image}
//               alt={user.name}
//               width={180}
//               height={180}
//               className="rounded-full border-4 border-blue-500 object-cover"
//             />

//           <Button size="sm" color="primary" className="mt-4">
//             <FaCamera className="mr-2" />
//             Change Photo
//           </Button>

//           <h1 className="text-3xl font-bold mt-5">{user.name}</h1>

//           <Chip color="primary" className="mt-3">
//             {user.role}
//           </Chip>
//         </div>

//         <div className="my-8 border-t border-gray-200 dark:border-zinc-700"></div>

//         {/* Info Section */}
//         <div className="space-y-6 text-gray-700 dark:text-gray-300">
//           <div className="flex items-center gap-4">
//             <FaEnvelope className="text-primary text-xl" />
//             <div>
//               <p className="text-sm text-gray-500">Email</p>
//               <p>{user.email}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <FaPhone className="text-primary text-xl" />
//             <div>
//               <p className="text-sm text-gray-500">Phone</p>
//               <p>{user.phone}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <FaMapMarkerAlt className="text-primary text-xl" />
//             <div>
//               <p className="text-sm text-gray-500">Address</p>
//               <p>{user.address}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <FaCalendarAlt className="text-primary text-xl" />
//             <div>
//               <p className="text-sm text-gray-500">Joined</p>
//               <p>{user.joined}</p>
//             </div>
//           </div>

//           <div>
//             <h2 className="font-semibold text-xl mb-2">About</h2>
//             <p className="text-gray-600 dark:text-gray-400 leading-7">
//               {user.bio}
//             </p>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Card, Button, Chip } from "@heroui/react";
import {
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaHospital,
  FaClock,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";
import Image from "next/image";

import { useSession } from "@/lib/auth-client";
import { getDoctorList } from "@/lib/api/doctorList";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      const doctorId = session?.user?.id;

      if (!doctorId) {
        setLoading(false);
        return;
      }

      try {
        const data = await getDoctorList(doctorId);
        setDoctor(data?.[0] || null);
      } catch (error) {
        console.error("Failed to fetch doctor profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!isPending) {
      fetchDoctorProfile();
    }
  }, [session?.user?.id, isPending]);

  if (isPending || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Please login first.</p>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Doctor Profile Not Found</h2>

          <p className="mt-2 text-gray-500">
            Please create your doctor profile first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl">
        <Card className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-zinc-900">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8">
            <div className="flex flex-col items-center justify-center text-center">
              {/* Profile Image */}
              <div className="relative">
                <Image
                  src={doctor.profileImage}
                  alt={doctor.doctorName}
                  width={160}
                  height={160}
                  className="h-[160px] w-[160px] rounded-full border-4 border-white object-cover shadow-lg dark:border-zinc-800"
                />

                {/* Camera Button */}
                <Button
                  isIconOnly
                  size="sm"
                  color="primary"
                  radius="full"
                  className="absolute bottom-1 right-1"
                >
                  <FaCamera />
                </Button>
              </div>

              {/* Doctor Name */}
              <h1 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
                {doctor.doctorName}
              </h1>

              {/* Qualification */}
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {doctor.qualifications}
              </p>

              {/* Specialization + Role */}
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <Chip color="primary" variant="flat">
                  {doctor.specialization}
                </Chip>

                <Chip color="success" variant="flat">
                  Doctor
                </Chip>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Section Title */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Doctor Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your professional profile information
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Email */}
              <InfoItem
                icon={<FaEnvelope />}
                label="Email"
                value={doctor.doctorEmail || session.user.email}
              />

              {/* Phone */}
              <InfoItem
                icon={<FaPhone />}
                label="Phone"
                value={session.user.phone || "Not available"}
              />

              {/* Specialization */}
              <InfoItem
                icon={<FaBriefcase />}
                label="Specialization"
                value={doctor.specialization}
              />

              {/* Qualification */}
              <InfoItem
                icon={<FaGraduationCap />}
                label="Qualification"
                value={doctor.qualifications}
              />

              {/* Hospital */}
              <InfoItem
                icon={<FaHospital />}
                label="Hospital"
                value={doctor.hospitalName}
              />

              {/* Experience */}
              <InfoItem
                icon={<FaCalendarAlt />}
                label="Experience"
                value={`${doctor.experience} years`}
              />

              {/* Available Days */}
              <InfoItem
                icon={<FaCalendarAlt />}
                label="Available Days"
                value={doctor.availableDays}
              />

              {/* Schedule */}
              <InfoItem
                icon={<FaClock />}
                label="Schedule"
                value={`${doctor.startTime} - ${doctor.endTime}`}
              />

              {/* Consultation Fee */}
              <InfoItem
                icon={<FaMoneyBillWave />}
                label="Consultation Fee"
                value={`৳ ${doctor.consultationFee}`}
              />
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-zinc-700">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                About Doctor
              </h2>

              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-zinc-800">
                <p className="leading-7 text-gray-600 dark:text-gray-300">
                  {doctor.description ||
                    "No description available for this doctor."}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      {/* Icon */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>

      {/* Label + Value */}
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {label}
        </p>

        <p className="mt-1 break-words font-semibold text-gray-800 dark:text-gray-100">
          {value || "Not available"}
        </p>
      </div>
    </div>
  );
}
