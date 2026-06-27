"use client";

import { useState } from "react";
import { Button, Input, Modal, TextField, Surface } from "@heroui/react";

import { FaEdit } from "react-icons/fa";
import { updateSchedule } from "@/lib/actions/schedule";
import { toast } from "react-toastify";

const statuses = ["Available", "Booked", "Off Day"];

const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export default function EditScheduleModal({ schedule,onSuccess, }) {
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState(schedule?.day || "");
  const [status, setStatus] = useState(schedule?.status || "");
  const [startTime, setStartTime] = useState(schedule?.startTime || "");
  const [endTime, setEndTime] = useState(schedule?.endTime || "");
  const [duration, setDuration] = useState(schedule?.duration || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {
      day,
      status,
      startTime,
      endTime,
      duration,
    };

    const res = await updateSchedule(schedule._id, updateData);

    if (res.modifiedCount > 0) {
      toast.success("Schedule Updated Successfully");
      onSuccess();
    } else {
      toast.error("Update Failed");
    }
  };
  const handleSelect = (value) => {
    setStatus(value);
    setOpen(false);
  };
  return (
    <Modal>
      <Button variant="outline" className={"border-none"}>
        <FaEdit />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />

            <Modal.Header>
              <div className="flex items-center gap-2">
                <FaEdit className="text-primary" />
                <div>
                  <h2 className="text-lg font-semibold">Edit Schedule</h2>
                  <p className="text-sm text-default-500">
                    Edit schedule for availability
                  </p>
                </div>
              </div>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Day */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Select Day
                    </label>

                    <div className="flex flex-wrap gap-2">
                      {days.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDay(d)}
                          className={`px-4 py-2 rounded-lg border transition-all duration-200
                            ${
                              day === d
                                ? "bg-primary border-primary"
                                : "bg-default-100 dark:bg-zinc-900 border-default-300 dark:border-zinc-700 text-default-800 dark:text-default-100 hover:border-primary hover:bg-default-200 dark:hover:bg-zinc-800"
                            }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-default-500">
                      Selected:{" "}
                      <span className="font-semibold text-default-900 dark:text-default-100">
                        {day || "None"}
                      </span>
                    </p>
                  </div>

                  {/* Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <TextField>
                      <label className="text-sm font-medium mb-1 block">
                        Start Time
                      </label>

                      <Input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                    </TextField>

                    <TextField>
                      <label className="text-sm font-medium mb-1 block">
                        End Time
                      </label>

                      <Input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                    </TextField>
                  </div>

                  {/* Duration */}
                  <TextField>
                    <label className="text-sm font-medium mb-1 block">
                      Duration
                    </label>

                    <Input
                      placeholder="30 Minutes"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </TextField>

                  {/* Status */}
                  <div className="w-full">
                    <label className="text-sm font-medium mb-2 block">
                      Status
                    </label>

                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="w-full px-4 py-2 rounded-lg border
                          bg-default-100
                        dark:bg-zinc-900
                          border-default-300
                        dark:border-zinc-700
                          text-left flex justify-between items-center
                          hover:border-primary
                          transition"
                      >
                        <span
                          className={
                            status
                              ? "text-default-900 dark:text-default-100"
                              : "text-default-500"
                          }
                        >
                          {status || "Select Status"}
                        </span>

                        <svg
                          className={`w-4 h-4 transition-transform ${
                            open ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {open && (
                        <div
                          className="
                            absolute left-0 right-0 mt-2
                            rounded-lg
                            border
                            border-default-300
                          dark:border-zinc-700
                          bg-white
                          dark:bg-zinc-900
                            shadow-xl
                            overflow-hidden
                            z-50
                            "
                        >
                          {statuses.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => handleSelect(item)}
                              className={`w-full text-left px-4 py-2 transition
                              ${
                                status === item
                                  ? "bg-primary"
                                  : "text-default-700 dark:text-default-200 hover:bg-default-100 dark:hover:bg-zinc-800"
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="mt-2 text-sm text-default-500">
                      Selected:{" "}
                      <span className="font-semibold text-default-900 dark:text-default-100">
                        {status || "None"}
                      </span>
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-end gap-3 pt-4">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit" color="primary">
                      Save Schedule
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
