"use client";

import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import DoctorProfileEdit from "./DoctorProfileEdit";
import { FaEye, FaTrash, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
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
