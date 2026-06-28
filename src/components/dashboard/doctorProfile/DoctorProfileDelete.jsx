"use client";


import { deleteDoctor } from "@/lib/actions/doctorCreate";
import { AlertDialog, Button } from "@heroui/react";

import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const DoctorProfileDelete = ({ doctor, onSuccess }) => {
  const handleDelete = async () => {
    const res = await deleteDoctor(doctor._id);

    if (res.deletedCount > 0) {
      toast.success("Schedule Deleted Successfully");

      if (onSuccess) {
        onSuccess();
      }
    } else {
      toast.error("Delete Failed");
    }
  };
  return (
    <AlertDialog>
      <Button variant="outline" className={"border-none"}>
        <FaTrash />
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Remove Doctor Profile Permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete and all of its data. This action
                cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Conform Remove
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DoctorProfileDelete;
