// "use client";

import Image from "next/image";
import { Button, Chip, Modal } from "@heroui/react";

import {
  FaEye,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUserMd,
  FaHospital,
  FaMoneyBillWave,
  FaClock,
  FaCalendarAlt,
  FaNotesMedical,
  FaCheckCircle,
  FaVenusMars,
} from "react-icons/fa";

export default function AppointmentView({ appointment }) {
  const statusColor = {
    Confirmed: "success",
    Pending: "warning",
    Cancelled: "danger",
    Rescheduled: "secondary",
    Completed: "primary",
  };

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
                <FaNotesMedical className="text-2xl text-primary" />

                <Modal.Heading className="text-2xl font-bold">
                  Appointment Details
                </Modal.Heading>
              </div>
            </Modal.Header>

            <Modal.Body>

              {/* Top Section */}

              <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 p-8 text-white">

                <div className="flex flex-col items-center gap-5">

                  <Image
                    src={appointment.doctorImage}
                    alt={appointment.doctorName}
                    width={250}
                    height={250}
                    className="h-44 w-44 rounded-full border-4 border-white object-cover shadow-xl"
                  />

                  <div className="text-center">
                    <h2 className="text-3xl font-bold">
                      {appointment.doctorName}
                    </h2>

                    <p className="mt-2 text-lg opacity-90">
                      {appointment.specialization}
                    </p>
                  </div>

                  <Chip
                    color={statusColor[appointment.status]}
                    variant="flat"
                  >
                    <FaCheckCircle className="mr-2" />
                    {appointment.status}
                  </Chip>

                </div>

              </div>

              {/* Information */}

              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

                <InfoCard
                  icon={<FaUser />}
                  title="Patient Name"
                  value={appointment.patientName}
                />

                <InfoCard
                  icon={<FaVenusMars />}
                  title="Gender"
                  value={appointment.gender}
                />

                <InfoCard
                  icon={<FaUser />}
                  title="Age"
                  value={`${appointment.age} Years`}
                />

                <InfoCard
                  icon={<FaEnvelope />}
                  title="Email"
                  value={appointment.email}
                />

                <InfoCard
                  icon={<FaPhone />}
                  title="Phone"
                  value={appointment.phone}
                />

                <InfoCard
                  icon={<FaHospital />}
                  title="Hospital"
                  value={appointment.hospitalName}
                />

                <InfoCard
                  icon={<FaCalendarAlt />}
                  title="Appointment Date"
                  value={appointment.appointmentDate}
                />

                <InfoCard
                  icon={<FaClock />}
                  title="Appointment Time"
                  value={appointment.appointmentTime}
                />

                <InfoCard
                  icon={<FaMoneyBillWave />}
                  title="Consultation Fee"
                  value={`৳ ${appointment.consultationFee}`}
                />

                <InfoCard
                  icon={<FaUserMd />}
                  title="Doctor"
                  value={appointment.doctorName}
                />

              </div>

              {/* Problem */}

              <div className="mt-6 rounded-2xl border border-default-200 bg-default-100 p-6">

                <div className="mb-4 flex items-center gap-3">

                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <FaNotesMedical className="text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">
                      Patient Problem
                    </h3>

                    <p className="text-sm text-default-500">
                      Problem description submitted during booking
                    </p>
                  </div>

                </div>

                <div className="rounded-xl">
                  <p className="whitespace-pre-line leading-8 text-default-700 text-justify">
                    {appointment.problem || "No problem description provided."}
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

      <div className="text-2xl text-primary">
        {icon}
      </div>

      <div>
        <p className="text-sm text-default-500">
          {title}
        </p>

        <h4 className="font-semibold">
          {value || "N/A"}
        </h4>
      </div>

    </div>
  );
}