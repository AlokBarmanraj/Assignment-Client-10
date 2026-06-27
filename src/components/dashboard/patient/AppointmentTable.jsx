
"use client";

import { Table, Chip } from "@heroui/react";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Khan",
    specialization: "Cardiology",
    date: "Jun 28, 2026",
    time: "10:00 AM",
    status: "Confirmed",
    fee: "$50",
  },
  {
    id: 2,
    doctor: "Dr. Ahmed Ali",
    specialization: "Dermatology",
    date: "Jun 30, 2026",
    time: "02:30 PM",
    status: "Pending",
    fee: "$40",
  },
  {
    id: 3,
    doctor: "Dr. Michael Brown",
    specialization: "Neurology",
    date: "Jul 02, 2026",
    time: "11:15 AM",
    status: "Completed",
    fee: "$70",
  },
];

export default function AppointmentTable() {
  return (
    <Table className="mt-9">
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Patient Appointments"
          className="min-w-[900px]"
        >
          <Table.Header>
            <Table.Column isRowHeader>ID</Table.Column>
            <Table.Column>DOCTOR</Table.Column>
            <Table.Column>SPECIALIZATION</Table.Column>
            <Table.Column>DATE</Table.Column>
            <Table.Column>TIME</Table.Column>
            <Table.Column>STATUS</Table.Column>
            <Table.Column>FEE</Table.Column>
          </Table.Header>

          <Table.Body>
            {appointments.map((appointment) => (
              <Table.Row
                key={appointment.id}
                id={appointment.id}
              >
                <Table.Cell>{appointment.id}</Table.Cell>
                <Table.Cell>{appointment.doctor}</Table.Cell>
                <Table.Cell>{appointment.specialization}</Table.Cell>
                <Table.Cell>{appointment.date}</Table.Cell>
                <Table.Cell>{appointment.time}</Table.Cell>

                <Table.Cell>
                  <Chip
                    size="sm"
                    variant="flat"
                    color={
                      appointment.status === "Confirmed"
                        ? "success"
                        : appointment.status === "Pending"
                        ? "warning"
                        : "primary"
                    }
                  >
                    {appointment.status}
                  </Chip>
                </Table.Cell>

                <Table.Cell>{appointment.fee}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}

