"use client";

import React, { useState } from "react";
import { AlertDialog, Button, Input } from "@heroui/react";
import { FaCalendarAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function AppointmentReschedule({
  appointment,refreshAppointments
}) {
  const [appointmentDate, setAppointmentDate] = useState(
    appointment.appointmentDate
  );

  const [appointmentTime, setAppointmentTime] = useState(
    appointment.appointmentTime
  );

  const [loading, setLoading] = useState(false);

  const handleReschedule = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointmentHistory/${appointment._id}/reschedule`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            appointmentDate,
            appointmentTime,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Appointment Rescheduled Successfully.");
        await refreshAppointments();

      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <Button
        isIconOnly
        color="warning"
        variant="flat"
        isDisabled={
          appointment.status === "Cancelled" ||
          appointment.status === "Completed"
        }
      >
        <FaCalendarAlt />
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="max-w-md">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Heading>
                Reschedule Appointment
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>

              <div className="space-y-4">

                <Input
                  type="date"
                  label="Appointment Date"
                  value={appointmentDate}
                  onChange={(e) =>
                    setAppointmentDate(e.target.value)
                  }
                />

                <Input
                  type="time"
                  label="Appointment Time"
                  value={appointmentTime}
                  onChange={(e) =>
                    setAppointmentTime(e.target.value)
                  }
                />

              </div>

            </AlertDialog.Body>

            <AlertDialog.Footer>

              <Button
                slot="close"
                variant="flat"
              >
                Close
              </Button>

              <Button
                color="warning"
                isLoading={loading}
                onPress={handleReschedule}
              >
                Save Reschedule
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}