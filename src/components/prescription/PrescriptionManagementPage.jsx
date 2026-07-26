"use client";

import { useEffect, useState } from "react";
import { Card, Button, Input } from "@heroui/react";
import { FaPlus, FaFilePrescription } from "react-icons/fa";

export default function PrescriptionManagementPage({ appointment }) {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    diagnosis: "",
    medicines: "",
    advice: "",
  });

  useEffect(() => {
    if (appointment) {
      setForm({
        patientName: appointment?.patientName || "",
        age: appointment?.age || "",
        diagnosis: "",
        medicines: "",
        advice: "",
      });
    }
  }, [appointment]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const prescriptionData = {
      appointmentId: appointment?._id,

      patientName: form.patientName,

      age: form.age,

      diagnosis: form.diagnosis,

      medicines: form.medicines,

      advice: form.advice,
    };

    console.log("Prescription Data:", prescriptionData);

  };

  return (
    <div className="p-6">
      <Card className="p-6 rounded-2xl shadow">
        <div className="flex items-center gap-3 mb-6">
          <FaFilePrescription className="text-2xl text-blue-500" />

          <h1 className="text-2xl font-bold">Prescription Management</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Patient Information */}

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">Patient Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h3 className="font-bold">Patient Name: {form.patientName}</h3>
              <h3 className="font-bold">Patient Age: {form.age}</h3>

            </div>
          </div>

          {/* Prescription Writing Area */}

          <div className="border rounded-xl p-5">
            <h2 className="font-semibold text-lg mb-4">Write Prescription</h2>

            <div className="space-y-4">
              <Input
                label="Diagnosis"
                name="diagnosis"
                placeholder="Enter patient's diagnosis"
                value={form.diagnosis}
                onChange={handleChange}
              />

              <div>
                <label className="text-sm font-medium">Medicines</label>

                <textarea
                  name="medicines"
                  rows={5}
                  placeholder="
Example:

1. Paracetamol 500mg
   - 1 tablet after meal
   - Twice daily

2. Antibiotic
   - 1 tablet morning & night
                  "
                  className="w-full mt-2 p-3 border rounded-xl focus:outline-none"
                  value={form.medicines}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Doctor Advice</label>

                <textarea
                  name="advice"
                  rows={5}
                  placeholder="Write patient's advice..."
                  className="w-full mt-2 p-3 border rounded-xl focus:outline-none"
                  value={form.advice}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            color="primary"
            className="mt-6"
            startContent={<FaPlus />}
          >
            Create Prescription
          </Button>
        </form>
      </Card>
    </div>
  );
}
