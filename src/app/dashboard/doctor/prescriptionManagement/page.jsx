
"use client";

import { useState } from "react";
import { Card, Button, Input } from "@heroui/react";

import { FaPlus, FaEdit } from "react-icons/fa";

export default function PrescriptionManagementPage() {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    diagnosis: "",
    medicines: "",
    advice: "",
  });

  return (
    <div className="p-6">
      {/* MAIN CARD */}
      <Card className="p-6 border rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-4">Prescription Management</h2>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Patient Name"
            value={form.patientName}
            onChange={(e) => setForm({ ...form, patientName: e.target.value })}
          />

          <Input
            placeholder="Age"
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />

          <Input
            placeholder="Diagnosis"
            value={form.diagnosis}
            onChange={(e) => setForm({ ...form, diagnosis: e.target.value })}
          />

          <Input
            placeholder="Medicines"
            value={form.medicines}
            onChange={(e) => setForm({ ...form, medicines: e.target.value })}
          />

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Advice</label>
            <textarea
              className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              value={form.advice}
              onChange={(e) => setForm({ ...form, advice: e.target.value })}
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-4 flex gap-3">
          <Button color="primary" startContent={<FaPlus />}>
            Create Prescription
          </Button>
        </div>
      </Card>
    </div>
  );
}
