"use client";

import React from "react";
import { Button, AlertDialog } from "@heroui/react";
import { toast } from "react-toastify";

export default function AppointmentCancel({ appointment,refreshAppointments, }) {
  const handleCancel = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointmentHistory/${appointment._id}/cancel`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Appointment cancelled successfully.");
        await refreshAppointments();
      } else {
        toast.error(data.message || "Failed to cancel appointment.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (

    <AlertDialog>
      <Button color="danger">Cancel</Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog>
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>Cancel Appointment?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>This action cannot be undone.</AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="flat">
                Cancel
              </Button>
              <Button
                isIconOnly
                color="danger"
                variant="flat"
                onPress={handleCancel}
                isDisabled={
                  appointment.status === "Cancelled" ||
                  appointment.status === "Completed"
                }
              >
                Confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
