"use client";

import Image from "next/image";
import { Button, Chip, Modal } from "@heroui/react";

import {
  FaEye,
  FaUserMd,
  FaHospital,
  FaMoneyBillWave,
  FaClock,
  FaCalendarAlt,
  FaGraduationCap,
  FaBriefcaseMedical,
  FaCheckCircle,
} from "react-icons/fa";

export default function DoctorProfileView({ doctor }) {
  return (
    <Modal>
      <Button isIconOnly variant="flat" color="primary">
        <FaEye />
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="max-h-[90vh] max-w-5xl overflow-y-auto rounded-3xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <div className="flex items-center gap-3">
                <FaUserMd className="text-2xl text-primary" />
                <Modal.Heading className="text-2xl font-bold">
                  Doctor Profile
                </Modal.Heading>
              </div>
            </Modal.Header>

            <Modal.Body>
              {/* Top Section */}

              <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 p-8 text-white">
                <div className="flex flex-col items-center gap-5">
                  <Image
                    src={doctor.profileImage}
                    width={250}
                    height={250}
                    alt={doctor.doctorName}
                    className="h-44 w-44 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full border-4 border-white object-cover shadow-xl"
                  />

                  <div className="text-center">
                    <h2 className="text-3xl font-bold">{doctor.doctorName}</h2>

                    <p className="mt-2 text-lg capitalize opacity-90">
                      {doctor.specialization}
                    </p>
                  </div>

                  <Chip color="success" variant="flat">
                    <FaCheckCircle className="mr-2" />
                    {doctor.verificationStatus}
                  </Chip>
                </div>
              </div>

              {/* Information */}

              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                <InfoCard
                  icon={<FaGraduationCap />}
                  title="Qualification"
                  value={doctor.qualifications}
                />

                <InfoCard
                  icon={<FaBriefcaseMedical />}
                  title="Experience"
                  value={`${doctor.experience} Years`}
                />

                <InfoCard
                  icon={<FaMoneyBillWave />}
                  title="Consultation Fee"
                  value={`৳ ${doctor.consultationFee}`}
                />

                <InfoCard
                  icon={<FaHospital />}
                  title="Hospital"
                  value={doctor.hospitalName}
                />

                <InfoCard
                  icon={<FaCalendarAlt />}
                  title="Available Days"
                  value={doctor.availableDays}
                />

                <InfoCard
                  icon={<FaClock />}
                  title="Available Time"
                  value={`${doctor.startTime} - ${doctor.endTime}`}
                />
              </div>
              {/* Description */}
              <div className="mt-6 rounded-2xl border border-default-200 bg-default-100 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <FaUserMd className="text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Description</h3>
                    <p className="text-sm text-default-500">
                      Doctor's professional overview
                    </p>
                  </div>
                </div>

                <div className="rounded-xl">
                  <p className="leading-8 text-default-700 whitespace-pre-line text-justify">
                    {doctor.description || "No description available."}
                  </p>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button color="danger" slot="close">
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-default-200 bg-default-100 p-5">
      <div className="text-2xl text-primary">{icon}</div>

      <div>
        <p className="text-sm text-default-500">{title}</p>

        <h4 className="font-semibold">{value || "N/A"}</h4>
      </div>
    </div>
  );
}
