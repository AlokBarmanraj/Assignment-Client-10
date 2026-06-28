import { Card, Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import {
  FaUserMd,
  FaHospital,
  FaClock,
  FaMoneyBillWave,
  FaGraduationCap,
  FaBriefcaseMedical,
} from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  const {
    _id,
    doctorName,
    specialization,
    qualifications,
    experience,
    consultationFee,
    hospitalName,
    profileImage,
    availableDays,
    startTime,
    endTime,
    verificationStatus,
  } = doctor;

  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5">
      <div className="flex flex-col items-center">
        <Image
          src={profileImage}
          alt={doctorName}
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-blue-100"
        />

        <h2 className="mt-4 text-2xl font-bold text-center">
          {doctorName}
        </h2>

        <Chip color="primary" variant="flat" className="mt-2">
          {specialization}
        </Chip>
      </div>

      <div className="space-y-3 mt-6 text-gray-700">

        <div className="flex items-center gap-2">
          <FaGraduationCap className="text-blue-600" />
          <span>{qualifications}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaBriefcaseMedical className="text-green-600" />
          <span>{experience} Years Experience</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMoneyBillWave className="text-yellow-500" />
          <span>${consultationFee}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaHospital className="text-red-500" />
          <span>{hospitalName}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaClock className="text-indigo-500" />
          <span>
            {availableDays} ({startTime} - {endTime})
          </span>
        </div>

        <Chip
          color={
            verificationStatus === "approved"
              ? "success"
              : verificationStatus === "pending"
              ? "warning"
              : "danger"
          }
          variant="flat"
        >
          {verificationStatus}
        </Chip>
      </div>

      <Link href={`/findDoctors/${_id}`} className="mt-6">
        <Button color="primary" className="w-full">
          <FaUserMd />
          View Profile
        </Button>
      </Link>
    </Card>
  );
};

export default DoctorCard;