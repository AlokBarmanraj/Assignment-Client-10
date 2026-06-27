"use client";

import { useEffect, useState } from "react";
import { Table, Chip } from "@heroui/react";
import { getScheduleList } from "@/lib/api/schedule";

import EditScheduleModal from "./EditScheduleModal";
import DeleteScheduleModal from "./DeleteScheduleModal";

export default function ScheduleTable({ refresh, setRefresh }) {
  const [schedules, setSchedules] = useState([]);

  const loadSchedules = async () => {
    const data = await getScheduleList();
    setSchedules(data);
  };

  useEffect(() => {
    loadSchedules();
  }, [refresh]);

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
      <Table aria-label="Schedule Table">
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              <Table.Column isRowHeader>ID</Table.Column>
              <Table.Column>DAY</Table.Column>
              <Table.Column>START</Table.Column>
              <Table.Column>END</Table.Column>
              <Table.Column>DURATION</Table.Column>
              <Table.Column>STATUS</Table.Column>
              <Table.Column>ACTION</Table.Column>
            </Table.Header>

            <Table.Body>
              {schedules.map((item, index) => (
                <Table.Row key={item._id}>
                  <Table.Cell>{index + 1}</Table.Cell>
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
                      {/* <EditScheduleModal /> */}
                      <EditScheduleModal
                        schedule={item}
                        onSuccess={() => setRefresh((prev) => !prev)}
                      />
                      <DeleteScheduleModal
                        schedule={item}
                        onSuccess={() => setRefresh((prev) => !prev)}
                      />
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
