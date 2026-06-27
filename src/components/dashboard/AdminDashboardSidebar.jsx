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

export function AdminDashboardSidebar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];

  const navContent = (
    <>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
            type="button"
          >
            <item.icon className="size-5 text-muted" />
            {item.label}
          </button>
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
        <div className="mt-3.5">
          {navContent}
        </div>
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
