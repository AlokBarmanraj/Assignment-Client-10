"use client";

import React, { useState } from "react";
import { Avatar, Button, Dropdown } from "@heroui/react";
import Image from "next/image";
import { ThemeSwitch } from "./ThemeSwitch";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  const handleLogOut = async () => {
    try {
      await authClient.signOut();
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navLinks = [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "FIND DOCTORS",
      href: "/findDoctors",
    },
    {
      label: "ABOUT US",
      href: "/aboutUs",
    },
    {
      label: "CONTACT US",
      href: "/contactUs",
    },
  ];

  const dashboardLink = {
    patient: "/patientDashboard/patient",
    doctor: "/doctorDashboard/doctor",
    admin: "/adminDashboard/admin",
  };

  const userRole = user?.role?.toLowerCase();

  const dashboardHref = dashboardLink[userRole] || dashboardLink.patient;

  const renderNavLinks = () => {
    return (
      <>
        {/* Main Links */}
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={pathName === item.href ? "font-bold underline" : ""}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* Dashboard */}
        {user && (
          <li key="dashboard">
            <Link
              href={dashboardHref}
              onClick={() => setIsMenuOpen(false)}
              className={
                pathName === dashboardHref ? "font-bold underline" : ""
              }
            >
              DASHBOARD
            </Link>
          </li>
        )}
      </>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/*Logo*/}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/image/logos.png"
              width={200}
              height={150}
              alt="Logo"
              priority
            />
          </Link>
        </div>

        {/*Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {renderNavLinks()}
        </ul>

        {/*Right Side*/}
        <div className="flex items-center gap-4">
          {/*Desktop User Section*/}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                {/* User Name */}
                <span className="font-semibold text-lg capitalize">
                  Hi, {user?.name || "User"}
                </span>

                {/* User Avatar Dropdown */}
                <Dropdown>
                  <Dropdown.Trigger>
                    <Avatar className="cursor-pointer">
                      <Avatar.Image
                        src={user?.image || ""}
                        alt={user?.name || "User"}
                        referrerPolicy="no-referrer"
                      />

                      <Avatar.Fallback>
                        {user?.name?.[0]?.toUpperCase() || "U"}
                      </Avatar.Fallback>
                    </Avatar>
                  </Dropdown.Trigger>

                  <Dropdown.Popover>
                    <Dropdown.Menu>
                      {/* Profile */}
                      <Dropdown.Item
                        id="profile"
                        className="text-[#2f94ff] font-bold hover:bg-transparent focus:bg-transparent"
                      >
                        <Link
                          href="/profile"
                          className="flex items-center gap-2 font-bold text-xl"
                        >
                          <CgProfile />
                          Profile
                        </Link>
                      </Dropdown.Item>

                      {/* Logout */}
                      <Dropdown.Item
                        id="logout"
                        className="hover:bg-transparent focus:bg-transparent"
                      >
                        <Button onClick={handleLogOut} variant="danger">
                          Logout
                          <IoLogOutOutline />
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </>
            ) : (
              <>
                {/* Login */}
                <Link href="/auth/login" className="font-bold">
                  Login
                </Link>

                {/* Register */}
                <Link href="/auth/register">
                  <Button>Register</Button>
                </Link>
              </>
            )}
          </div>

          {/*Theme Switch*/}
          <div className="hidden md:block">
            <ThemeSwitch />
          </div>

          {/*Mobile Menu Button*/}
          <button
            type="button"
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/*Mobile Menu*/}
      {isMenuOpen && (
        <div className="border-t border-default-200 bg-background md:hidden">
          <ul className="flex flex-col gap-4 p-5">
            {/* Navigation Links */}
            {renderNavLinks()}

            {/*Profile*/}
            {user && (
              <li key="profile-mobile">
                <Link
                  href="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 font-bold text-xl"
                >
                  <CgProfile />
                  Profile
                </Link>
              </li>
            )}

            <hr />

            {/*Logged Out*/}
            {!user && (
              <>
                <li key="login-mobile">
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </li>

                <li key="register-mobile">
                  <Link
                    href="/auth/register"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button color="primary" className="w-full">
                      Register
                    </Button>
                  </Link>
                </li>
              </>
            )}

            {/*Logged In Logout*/}
            {user && (
              <li key="logout-mobile">
                <Button
                  onClick={handleLogOut}
                  color="danger"
                  className="w-full"
                >
                  Logout
                  <IoLogOutOutline />
                </Button>
              </li>
            )}

            {/*Theme Switch*/}
            <li key="theme-mobile">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
