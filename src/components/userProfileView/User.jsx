"use client";

import { Button, Chip, Modal } from "@heroui/react";
import { FaEye, FaUser } from "react-icons/fa";
import Image from "next/image";

export default function UserProfileView({ user }) {
  return (
    <Modal>
      <Button isIconOnly color="primary">
        <FaEye />
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[500px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-primary text-white">
                <FaUser className="size-5" />
              </Modal.Icon>

              <Modal.Heading>User Profile</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <div className="flex flex-col items-center">

                <Image
                  src={user.image || "https://i.pravatar.cc/150?img=1"}
                  alt={user.name}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-default-300 object-cover"
                />

                <h2 className="mt-4 text-2xl font-bold">
                  {user.name}
                </h2>

                <p className="text-default-500">
                  {user.email}
                </p>

                <div className="mt-3">
                  <Chip
                    color={
                      user.role === "admin"
                        ? "danger"
                        : user.role === "doctor"
                        ? "secondary"
                        : "primary"
                    }
                  >
                    {user.role || "User"}
                  </Chip>
                </div>
              </div>

              <div className="mt-6 space-y-4 rounded-xl border border-default-200 p-5">

                <div className="flex justify-between">
                  <span className="font-semibold">Name</span>
                  <span>{user.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Email</span>
                  <span>{user.email}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Role</span>

                  <Chip
                    size="sm"
                    color={
                      user.role === "admin"
                        ? "danger"
                        : user.role === "doctor"
                        ? "secondary"
                        : "primary"
                    }
                  >
                    {user.role || "User"}
                  </Chip>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">
                    Email Verified
                  </span>

                  <Chip
                    size="sm"
                    color={
                      user.emailVerified
                        ? "success"
                        : "warning"
                    }
                  >
                    {user.emailVerified ? "Yes" : "No"}
                  </Chip>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">
                    Phone
                  </span>

                  <span>{user.phone || "N/A"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">
                    Created
                  </span>

                  <span>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="flat">
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}