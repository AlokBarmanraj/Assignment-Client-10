"use client";
import { authClient } from "@/lib/auth-client";
import {
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Avatar, Button, Drawer } from "@heroui/react";
import { FiSidebar } from "react-icons/fi";
import Link from "next/link";

export function DoctorDashboardSidebar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const navItems = [
    {
      icon: House,
      href: "/doctorDashboard/doctor",
      label: "Dashboard",
    },
    {
      icon: House,
      href: "/doctorDashboard/doctor/manageSchedule",
      label: "Manage Schedule",
    },
    {
      icon: Magnifier,
      href: "/doctorDashboard/doctor/doctorCreate",
      label: "Doctor Profile Create",
    },
    {
      icon: Bell,
      href: "/doctorDashboard/doctor/allPrescription",
      label: "All Prescription",
    },
    {
      icon: Envelope,
      href: "/doctorDashboard/doctor/appointmentComplete",
      label: "Appointment Complete",
    },
    {
      icon: Person,
      href: "/doctorDashboard/doctor/profileManagement",
      label: "Profile Management",
    },
    {
      icon: Gear,
      href: "/doctorDashboard/doctor/prescriptionManagement",
      label: "Prescription Management",
    },
    {
      icon: Gear,
      href: "/doctorDashboard/doctor/appointmentRequests",
      label: "Appointment Requests",
    },
  ];

  const navContent = (
    <>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          >
            <item.icon className="size-5 text-muted" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        <Avatar className="h-12 w-12 ml-10">
          <Avatar.Image
            src={user?.image}
            alt={user?.name || "User"}
            referrerPolicy="no-referrer"
          />

          <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
        </Avatar>
        <div>
          <h2 className="font-bold text-gray-600 text-xl">{user?.name}</h2>
        </div>
        <div className="mt-3.5">{navContent}</div>
      </aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <FiSidebar />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Dashboard</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
