"use client";

import { useState } from "react";
import { Button, Chip, Modal } from "@heroui/react";

import {
  FaEye,
  FaUser,
  FaUserMd,
  FaCalendarAlt,
  FaNotesMedical,
  FaPills,
  FaClipboardCheck,
  FaEnvelope,
  FaBirthdayCake,
} from "react-icons/fa";
import Image from "next/image";

export default function ViewPrescription({ prescription }) {
  const [open, setOpen] = useState(false);

  if (!prescription) return null;

  return (
    <>
      {/* View Button */}

      <Button
        isIconOnly
        variant="flat"
        color="primary"
        onPress={() => setOpen(true)}
      >
        <FaEye />
      </Button>

      <Modal isOpen={open} onOpenChange={setOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl">
              <Modal.CloseTrigger />

              {/* Header */}

              <Modal.Header>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <FaNotesMedical className="text-xl" />
                  </div>

                  <div>
                    <Modal.Heading className="text-2xl font-bold">
                      My Prescription
                    </Modal.Heading>

                    <p className="text-sm text-default-500">
                      Doctor provided prescription details
                    </p>
                  </div>
                </div>
              </Modal.Header>

              <Modal.Body className="space-y-6">
                {/* Doctor Card */}

                <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20">
                      <FaUserMd className="text-5xl" />
                    </div>

                    <h2 className="text-2xl font-bold">
                      {prescription.doctorName}
                    </h2>

                    <p className="opacity-90">Medical Prescription</p>

                    <Chip color="success" variant="flat">
                      Completed
                    </Chip>
                  </div>
                </div>

                {/* Patient Details */}

                <section>
                  <h3 className="mb-3 text-lg font-bold">
                    Patient Information
                  </h3>

                  <div className="grid gap-4 md:grid-cols-2">
                    <InfoCard
                      icon={<FaUser />}
                      title="Patient Name"
                      value={prescription.patientName}
                    />

                    <InfoCard
                      icon={<FaEnvelope />}
                      title="Email"
                      value={prescription.patientEmail}
                    />

                    <InfoCard
                      icon={<FaBirthdayCake />}
                      title="Age"
                      value={`${prescription.age} Years`}
                    />

                    <InfoCard
                      icon={<FaCalendarAlt />}
                      title="Date"
                      value={new Date(
                        prescription.createdAt,
                      ).toLocaleDateString()}
                    />
                  </div>
                </section>

                {/* Prescription Details */}

                <section className="space-y-4">
                  <PrescriptionCard
                    icon={<FaNotesMedical />}
                    title="Diagnosis"
                    value={prescription.diagnosis}
                  />

                  <PrescriptionCard
                    icon={<FaPills />}
                    title="Medicines"
                    value={prescription.medicines}
                  />

                  <PrescriptionCard
                    icon={<FaClipboardCheck />}
                    title="Doctor Advice"
                    value={prescription.advice}
                  />
                </section>
              </Modal.Body>

              <Modal.Footer>
                <Button color="danger" onPress={() => setOpen(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-default-200 bg-default-100 p-4">
      <div className="rounded-xl bg-primary/10 p-3 text-primary">{icon}</div>

      <div>
        <p className="text-sm text-default-500">{title}</p>

        <p className="font-semibold">{value || "N/A"}</p>
      </div>
    </div>
  );
}

function PrescriptionCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-default-200 bg-default-100 p-5">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          {icon}
        </div>

        <h3 className="font-bold text-lg">{title}</h3>
      </div>

      <p className="rounded-xl bg-black/5 dark:bg-white/5 p-4 leading-7 whitespace-pre-line">
        {value || "No information available"}
      </p>
    </div>
  );
}
