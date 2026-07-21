"use client";

import { useEffect, useState } from "react";
import { AlertDialog, Button, Card, Chip, Spinner } from "@heroui/react";

import { FaEye, FaTrash, FaUserMd } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-toastify";
import DoctorProfileView from "@/components/dashboard/doctorProfile/DoctorProfileView";

export default function ManageDoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // All Doctor
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/manageDoctors`)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Delete Doctor
  const handleDeleteDoctor = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/manageDoctors/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        setDoctors((prevDoctors) =>
          prevDoctors.filter((doctor) => doctor._id !== id),
        );

        toast.success("Doctor deleted successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete doctor");
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen p-4 md:p-8">
        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold">Manage Doctors</h1>

          <p className="mt-2 text-default-500">
            Manage all registered doctors.
          </p>
        </div>

        {/* Summary Card */}

        <div className="mb-8 grid grid-cols-1 gap-5">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p>Total Doctors</p>

                <h2 className="text-3xl font-bold">{doctors.length}</h2>
              </div>

              <FaUserMd className="text-4xl text-blue-500" />
            </div>
          </Card>
        </div>

        {/* Desktop Table */}

        <Card className="hidden overflow-x-auto p-4 lg:block">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">Doctor</th>

                <th>Specialization</th>

                <th>Hospital</th>

                <th>Experience</th>

                <th>Fee</th>

                <th>Status</th>

                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor._id} className="border-b">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={doctor.profileImage}
                        alt={doctor.doctorName}
                        width={52}
                        height={52}
                        className="h-13 w-13 rounded-full border-2 border-default-300 object-cover dark:border-default-600"
                      />

                      <div>
                        <h2 className="font-semibold">{doctor.doctorName}</h2>

                        <p className="text-sm text-default-500">
                          {doctor.qualifications}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>{doctor.specialization}</td>

                  <td>{doctor.hospitalName}</td>

                  <td>{doctor.experience} Years</td>

                  <td>৳{doctor.consultationFee}</td>

                  <td>
                    <Chip color="success">Active</Chip>
                  </td>

                  <td>
                    <div className="flex justify-center gap-2">
                      <DoctorProfileView doctor={doctor}></DoctorProfileView>

                      <AlertDialog>
                        <Button isIconOnly color="danger">
                          <FaTrash />
                        </Button>

                        <AlertDialog.Backdrop>
                          <AlertDialog.Container>
                            <AlertDialog.Dialog className="sm:max-w-[400px]">
                              <AlertDialog.CloseTrigger />

                              <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />

                                <AlertDialog.Heading>
                                  Remove Doctor Permanently?
                                </AlertDialog.Heading>
                              </AlertDialog.Header>

                              <AlertDialog.Body>
                                <p>
                                  This will permanently delete the doctor and
                                  all of its data. This action cannot be undone.
                                </p>
                              </AlertDialog.Body>

                              <AlertDialog.Footer>
                                <Button slot="close" variant="flat">
                                  Cancel
                                </Button>

                                <Button
                                  color="danger"
                                  slot="close"
                                  onPress={() => handleDeleteDoctor(doctor._id)}
                                >
                                  Confirm Remove
                                </Button>
                              </AlertDialog.Footer>
                            </AlertDialog.Dialog>
                          </AlertDialog.Container>
                        </AlertDialog.Backdrop>
                      </AlertDialog>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Mobile Card */}

        <div className="grid gap-5 lg:hidden">
          {doctors.map((doctor) => (
            <Card key={doctor._id} className="p-5">
              <div className="flex items-center gap-4">
                <Image
                  src={doctor.profileImage}
                  alt={doctor.doctorName}
                  width={52}
                  height={52}
                  className="h-13 w-13 rounded-full border-2 border-default-300 object-cover dark:border-default-600"
                />

                <div>
                  <h2 className="font-bold">{doctor.doctorName}</h2>

                  <p className="text-sm text-default-500">
                    {doctor.specialization}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p>
                  <strong>Hospital:</strong> {doctor.hospitalName}
                </p>

                <p>
                  <strong>Experience:</strong> {doctor.experience} Years
                </p>

                <p>
                  <strong>Fee:</strong> ৳{doctor.consultationFee}
                </p>
              </div>

              <div className="mt-4">
                <Chip color="success">Active</Chip>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <DoctorProfileView doctor={doctor}></DoctorProfileView>

                <AlertDialog>
                  <Button color="danger">Delete</Button>

                  <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                      <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                          <AlertDialog.Icon status="danger" />

                          <AlertDialog.Heading>
                            Remove Doctor Permanently?
                          </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                          <p>
                            This will permanently delete the doctor and all of
                            its data. This action cannot be undone.
                          </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                          <Button slot="close" variant="flat">
                            Cancel
                          </Button>

                          <Button
                            color="danger"
                            slot="close"
                            onPress={() => handleDeleteDoctor(doctor._id)}
                          >
                            Confirm Remove
                          </Button>
                        </AlertDialog.Footer>
                      </AlertDialog.Dialog>
                    </AlertDialog.Container>
                  </AlertDialog.Backdrop>
                </AlertDialog>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
