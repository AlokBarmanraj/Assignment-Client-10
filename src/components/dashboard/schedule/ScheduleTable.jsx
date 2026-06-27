

"use client";

import {
  Table,
  Chip,
} from "@heroui/react";

import EditScheduleModal from "./EditScheduleModal";
import DeleteScheduleModal from "./DeleteScheduleModal";

const schedules = [
  {
    id: 1,
    day: "Monday",
    startTime: "09:00 AM",
    endTime: "12:00 PM",
    duration: "30 Min",
    status: "Available",
  },
  {
    id: 2,
    day: "Tuesday",
    startTime: "02:00 PM",
    endTime: "06:00 PM",
    duration: "20 Min",
    status: "Booked",
  },
  {
    id: 3,
    day: "Wednesday",
    startTime: "10:00 AM",
    endTime: "01:00 PM",
    duration: "15 Min",
    status: "Available",
  },
  {
    id: 4,
    day: "Thursday",
    startTime: "11:00 AM",
    endTime: "03:00 PM",
    duration: "30 Min",
    status: "Off Day",
  },
];

export default function ScheduleTable() {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
      <Table aria-label="Schedule Table" className="min-w-[700px]">

        <Table.ScrollContainer>
          <Table.Content>

            {/* HEADER */}
            <Table.Header>
              <Table.Column isRowHeader>ID</Table.Column>
              <Table.Column>DAY</Table.Column>
              <Table.Column>START</Table.Column>
              <Table.Column>END</Table.Column>
              <Table.Column>DURATION</Table.Column>
              <Table.Column>STATUS</Table.Column>
              <Table.Column>ACTION</Table.Column>
            </Table.Header>

            {/* BODY */}
            <Table.Body>
              {schedules.map((item) => (
                <Table.Row key={item.id}>

                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.day}</Table.Cell>
                  <Table.Cell>{item.startTime}</Table.Cell>
                  <Table.Cell>{item.endTime}</Table.Cell>
                  <Table.Cell>{item.duration}</Table.Cell>

                  <Table.Cell>
                    <Chip
                      size="sm"
                      variant="flat"
                      color={
                        item.status === "Available"
                          ? "success"
                          : item.status === "Booked"
                          ? "primary"
                          : "danger"
                      }
                    >
                      {item.status}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex gap-2">
                        <EditScheduleModal></EditScheduleModal>

                        <DeleteScheduleModal></DeleteScheduleModal>
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



