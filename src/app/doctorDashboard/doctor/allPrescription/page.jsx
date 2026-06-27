"use client";

import DeletePrescription from "@/components/prescription/DeletePrescription";
import UpdatePrescription from "@/components/prescription/UpdatePrescription";
import { Table, Button } from "@heroui/react";
import { FaEye } from "react-icons/fa";
const prescriptions = [
  {
    id: "#RX-1001",
    patient: "John Smith",
    age: 35,
    diagnosis: "Fever",
    medicines: "Paracetamol",
    date: "26 Jun 2026",
  },
  {
    id: "#RX-1002",
    patient: "Kate Moore",
    age: 28,
    diagnosis: "Diabetes",
    medicines: "Metformin",
    date: "25 Jun 2026",
  },
  {
    id: "#RX-1003",
    patient: "Michael Brown",
    age: 41,
    diagnosis: "Hypertension",
    medicines: "Amlodipine",
    date: "24 Jun 2026",
  },
];

export default function PrescriptionTable() {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border bg-white shadow">
      <Table>
        <Table.ScrollContainer>
          <Table.Content
            aria-label="Prescription Table"
            className="min-w-[900px]"
          >
            <Table.Header>
              {/* <Table.Column>ID</Table.Column> */}
              <Table.Column isRowHeader>ID</Table.Column>
              <Table.Column>Patient</Table.Column>
              <Table.Column>Age</Table.Column>
              <Table.Column>Diagnosis</Table.Column>
              <Table.Column>Medicines</Table.Column>
              <Table.Column>Date</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>

            <Table.Body>
              {prescriptions.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.patient}</Table.Cell>
                  <Table.Cell>{item.age}</Table.Cell>
                  <Table.Cell>{item.diagnosis}</Table.Cell>
                  <Table.Cell>{item.medicines}</Table.Cell>
                  <Table.Cell>{item.date}</Table.Cell>

                  <Table.Cell>
                    <div className="flex items-center gap-2">
                      <Button
                        isIconOnly
                        size="sm"
                        color="primary"
                        variant="solid"
                      >
                        <FaEye />
                      </Button>

                     <UpdatePrescription></UpdatePrescription>
                     <DeletePrescription></DeletePrescription>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
