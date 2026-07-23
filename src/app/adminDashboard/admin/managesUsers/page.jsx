"use client";

import { useEffect, useState } from "react";
import {
  AlertDialog,
  Button,
  Card,
  Chip,
  Spinner,
} from "@heroui/react";

import Image from "next/image";
import { FaEye, FaTrash, FaUsers } from "react-icons/fa";
import { toast } from "react-toastify";

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load Users
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/managesUsers`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Delete User
  const handleDeleteUser = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/managesUsers/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        setUsers((prev) => prev.filter((user) => user._id !== id));

        toast.success("User deleted successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete user");
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
    <div className="min-h-screen p-4 md:p-8">

      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Manage Users
        </h1>

        <p className="mt-2 text-default-500">
          Manage all registered users.
        </p>
      </div>

      {/* Summary */}

      <div className="mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p>Total Users</p>

              <h2 className="text-3xl font-bold">
                {users.length}
              </h2>
            </div>

            <FaUsers className="text-4xl text-blue-500" />
          </div>
        </Card>
      </div>

      {/* Desktop */}

      <Card className="hidden overflow-x-auto p-4 lg:block">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">User</th>
              <th>Email</th>
              <th>Status</th>
              <th className="text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">

                    <Image
                      src={
                        user.image ||
                        "https://i.pravatar.cc/150?img=1"
                      }
                      alt={user.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />

                    <div>
                      <h2 className="font-semibold">
                        {user.name}
                      </h2>

                      <p className="text-sm text-default-500">
                        {user.phone || "No Phone"}
                      </p>
                    </div>

                  </div>
                </td>

                <td>{user.email}</td>


                <td>
                  <Chip color="success">
                    Active
                  </Chip>
                </td>

                <td>
                  <div className="flex justify-center gap-2">

                    <Button
                      isIconOnly
                      color="primary"
                    >
                      <FaEye />
                    </Button>

                    <AlertDialog>
                      <Button
                        isIconOnly
                        color="danger"
                      >
                        <FaTrash />
                      </Button>

                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">

                            <AlertDialog.CloseTrigger />

                            <AlertDialog.Header>

                              <AlertDialog.Icon status="danger" />

                              <AlertDialog.Heading>
                                Delete User?
                              </AlertDialog.Heading>

                            </AlertDialog.Header>

                            <AlertDialog.Body>
                              This user will be permanently
                              removed.
                            </AlertDialog.Body>

                            <AlertDialog.Footer>

                              <Button
                                slot="close"
                                variant="flat"
                              >
                                Cancel
                              </Button>

                              <Button
                                slot="close"
                                color="danger"
                                onPress={() =>
                                  handleDeleteUser(
                                    user._id,
                                  )
                                }
                              >
                                Delete
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

      {/* Mobile */}

      <div className="grid gap-5 lg:hidden">

        {users.map((user) => (
          <Card
            key={user._id}
            className="p-5"
          >
            <div className="flex items-center gap-4">

              <Image
                src={
                  user.image ||
                  "https://i.pravatar.cc/150?img=1"
                }
                alt={user.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />

              <div>
                <h2 className="font-bold">
                  {user.name}
                </h2>

                <p className="text-sm text-default-500">
                  {user.email}
                </p>
              </div>

            </div>

            <div className="mt-4 space-y-2">

              <p>
                <strong>Role:</strong>{" "}
                {user.role}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {user.phone || "N/A"}
              </p>

            </div>

            <div className="mt-4">
              <Chip color="success">
                Active
              </Chip>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">

              <Button color="primary">
                <FaEye />
              </Button>

              <AlertDialog>
                <Button color="danger">
                  Delete
                </Button>

                <AlertDialog.Backdrop>
                  <AlertDialog.Container>
                    <AlertDialog.Dialog>

                      <AlertDialog.CloseTrigger />

                      <AlertDialog.Header>

                        <AlertDialog.Icon status="danger" />

                        <AlertDialog.Heading>
                          Delete User?
                        </AlertDialog.Heading>

                      </AlertDialog.Header>

                      <AlertDialog.Body>
                        This action cannot be
                        undone.
                      </AlertDialog.Body>

                      <AlertDialog.Footer>

                        <Button
                          slot="close"
                          variant="flat"
                        >
                          Cancel
                        </Button>

                        <Button
                          slot="close"
                          color="danger"
                          onPress={() =>
                            handleDeleteUser(
                              user._id,
                            )
                          }
                        >
                          Delete
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
  );
}