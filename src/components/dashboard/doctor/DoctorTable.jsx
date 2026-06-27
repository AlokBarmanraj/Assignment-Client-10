"use client";

import { Table, Chip } from "@heroui/react";

const patients = [
  {
    id: 1,
    name: "John Smith",
    age: 32,
    gender: "Male",
    time: "10:00 AM",
    problem: "Heart Checkup",
    status: "Completed",
  },
  {
    id: 2,
    name: "Emily Johnson",
    age: 27,
    gender: "Female",
    time: "11:30 AM",
    problem: "Skin Allergy",
    status: "Pending",
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 45,
    gender: "Male",
    time: "02:00 PM",
    problem: "Headache",
    status: "Confirmed",
  },
  {
    id: 4,
    name: "Sophia Wilson",
    age: 38,
    gender: "Female",
    time: "03:15 PM",
    problem: "Diabetes Follow-up",
    status: "Completed",
  },
];

export default function DoctorTable() {
  return (
    <Table className="mt-8">
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Recent Patients"
          className="min-w-[900px]"
        >
          <Table.Header>
            <Table.Column isRowHeader>ID</Table.Column>
            <Table.Column>PATIENT</Table.Column>
            <Table.Column>AGE</Table.Column>
            <Table.Column>GENDER</Table.Column>
            <Table.Column>TIME</Table.Column>
            <Table.Column>PROBLEM</Table.Column>
            <Table.Column>STATUS</Table.Column>
          </Table.Header>

          <Table.Body>
            {patients.map((patient) => (
              <Table.Row key={patient.id} id={patient.id}>
                <Table.Cell>{patient.id}</Table.Cell>
                <Table.Cell>{patient.name}</Table.Cell>
                <Table.Cell>{patient.age}</Table.Cell>
                <Table.Cell>{patient.gender}</Table.Cell>
                <Table.Cell>{patient.time}</Table.Cell>
                <Table.Cell>{patient.problem}</Table.Cell>

                <Table.Cell>
                  <Chip
                    size="sm"
                    variant="flat"
                    color={
                      patient.status === "Completed"
                        ? "success"
                        : patient.status === "Pending"
                        ? "warning"
                        : "primary"
                    }
                  >
                    {patient.status}
                  </Chip>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}