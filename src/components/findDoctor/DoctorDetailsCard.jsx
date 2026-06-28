"use client";

import { Card, Button, Chip } from "@heroui/react";
import Image from "next/image";

import {
  FaUserMd,
  FaHospital,
  FaMoneyBillWave,
  FaGraduationCap,
  FaBriefcaseMedical,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const DoctorDetailsCard = ({ doctorData }) => {
  const {
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
    description,
  } = doctorData;

  return (
    <Card className="p-8 rounded-2xl shadow-lg">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src={profileImage}
            width={450}
            height={450}
            alt={doctorName}
            className="rounded-3xl object-cover"
          />
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="text-4xl font-bold">{doctorName}</h1>

            <Chip color="primary" className="mt-3">
              {specialization}
            </Chip>
          </div>

          <div className="flex gap-3 items-center">
            <FaGraduationCap className="text-blue-600" />
            <span>{qualifications}</span>
          </div>

          <div className="flex gap-3 items-center">
            <FaBriefcaseMedical className="text-green-600" />
            <span>{experience} Years Experience</span>
          </div>

          <div className="flex gap-3 items-center">
            <FaMoneyBillWave className="text-yellow-500" />
            <span>${consultationFee}</span>
          </div>

          <div className="flex gap-3 items-center">
            <FaHospital className="text-red-500" />
            <span>{hospitalName}</span>
          </div>

          <div className="flex gap-3 items-center">
            <FaCalendarAlt className="text-indigo-600" />
            <span>{availableDays}</span>
          </div>

          <div className="flex gap-3 items-center">
            <FaClock className="text-purple-600" />
            <span>
              {startTime} - {endTime}
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
          >
            {verificationStatus}
          </Chip>
<div>
  <h3 className="flex items-center gap-2.5 text-lg font-bold mb-3">
    <FaUserMd className="text-blue-700" />
    Description
  </h3>

  <p className="leading-8 text-default-700 whitespace-pre-line text-justify">
    {description || "No description available."}
  </p>
</div>
          <Button color="primary" size="lg" className="w-full">
            Book Appointment
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DoctorDetailsCard;
