"use client";

import { useEffect, useState } from "react";
import { Card, Button, Input } from "@heroui/react";
import { FaPlus, FaFilePrescription } from "react-icons/fa";
import { toast } from "react-toastify";

export default function PrescriptionManagementPage({ appointment }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    patientName: "",
    age: "",
    diagnosis: "",
    medicines: "",
    advice: "",
  });

  useEffect(() => {
    if (appointment) {
      console.log("Appointment:", appointment);

      setForm({
        patientName: appointment.patientName || "",
        age: appointment.age || "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const prescriptionData = {
        appointmentId: appointment._id,
        patientName: appointment.patientName,
        patientEmail: appointment.email,

        doctorName: appointment.doctorName,
        doctorEmail: "",

        age: appointment.age,
        diagnosis: form.diagnosis,
        medicines: form.medicines,
        advice: form.advice,
        createdAt: new Date(),
      };

      console.log("Prescription Data:", prescriptionData);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/prescriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(prescriptionData),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create prescription");
      }

      toast.success("Prescription Created Successfully");

      setForm({
        patientName: appointment?.patientName || "",
        age: appointment?.age || "",
        diagnosis: "",
        medicines: "",
        advice: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <Card className="p-6 rounded-2xl shadow">
        <div className="flex items-center gap-3 mb-6">
          <FaFilePrescription className="text-2xl text-blue-500" />
          <h1 className="text-2xl font-bold">Prescription Management</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">Patient Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <h3 className="font-bold">Patient Name : {form.patientName}</h3>

              <h3 className="font-bold">Patient Age : {form.age}</h3>
            </div>
          </div>

          <div className="border rounded-xl p-5">
            <h2 className="font-semibold text-lg mb-4">Write Prescription</h2>

            <div className="space-y-4">
              <Input
                label="Diagnosis"
                name="diagnosis"
                placeholder="Enter Diagnosis"
                value={form.diagnosis}
                onChange={handleChange}
              />

              <div>
                <label className="text-sm font-medium">Medicines</label>

                <textarea
                  rows={6}
                  name="medicines"
                  value={form.medicines}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-xl focus:outline-none"
                  placeholder={`1. Napa 500mg
- 1 tablet after meal
- Twice daily

2. Cefixime 200mg
- Morning & Night`}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Doctor Advice</label>

                <textarea
                  rows={6}
                  name="advice"
                  value={form.advice}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-xl focus:outline-none"
                  placeholder="Write doctor's advice..."
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            color="primary"
            className="mt-6"
            startContent={<FaPlus />}
            isLoading={loading}
          >
            {loading ? "Creating..." : "Create Prescription"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
