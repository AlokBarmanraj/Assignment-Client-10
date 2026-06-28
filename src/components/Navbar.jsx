"use client";

import React, { useState } from "react";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import { ThemeSwitch } from "./ThemeSwitch";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { CgProfile } from "react-icons/cg";
import { IoChevronDown, IoLogOutOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const handleLogOut = async () => {
    await authClient.signOut();
  };
  const navLink = (
    <>
      <li>
        <Link
          href="/"
          className={`${pathName === "/" ? "font-bold underline" : " "}`}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          href="/findDoctors"
          className={`${pathName === "/findDoctors" ? "font-bold underline" : " "}`}
        >
          FIND DOCTORS
        </Link>
      </li>
      <li>
        <Link
          href="/aboutUs"
          className={`${pathName === "/aboutUs" ? "font-bold underline" : " "}`}
        >
          ABOUT US
        </Link>
      </li>
      <li>
        <Link
          href="/contactUs"
          className={`${pathName === "/contactUs" ? "font-bold underline" : " "}`}
        >
          CONTACT US
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/image/logos.png" width={200} height={150} alt="Logo" />
          </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLink}
          {/* Dashboard Dropdown */}

          <Dropdown>
            <Dropdown.Trigger>
              <li>
                <Link
                  href="/dashboard"
                  className={`${pathName === "/dashboard" ? "font-bold underline" : " "}`}
                >
                  <span className="flex items-center">
                    {" "}
                    DASHBOARD <IoIosArrowDown />
                  </span>
                </Link>
              </li>
            </Dropdown.Trigger>

            <Dropdown.Popover>
              <Dropdown.Menu onAction={(key) => console.log(key)}>
                <Dropdown.Item id="patient">
                  <li className="list-none">
                    <Link
                      href="/patientDashboard/patient"
                      className={`${pathName === "/patientDashboard/patient" ? "font-bold underline" : " "}`}
                    >
                      Patient
                    </Link>
                  </li>
                </Dropdown.Item>

                <Dropdown.Item id="doctor">
                  <li className="list-none">
                    <Link
                      href="/doctorDashboard/doctor"
                      className={`${pathName === "/doctorDashboard/doctor" ? "font-bold underline" : " "}`}
                    >
                      Doctor
                    </Link>
                  </li>
                </Dropdown.Item>

                <Dropdown.Item id="admin">
                  <li className="list-none">
                    <Link
                      href="/adminDashboard/admin"
                      className={`${pathName === "/adminDashboard/admin" ? "font-bold underline" : " "}`}
                    >
                      Admin
                    </Link>
                  </li>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <span className="font-semibold text-lg capitalize">
                  Hi, {user?.name}
                </span>
                <Dropdown>
                  <Dropdown.Trigger>
                    <Avatar className="cursor-pointer">
                      <Avatar.Image
                        src={user?.image}
                        alt={user?.name || "User"}
                        referrerPolicy="no-referrer"
                      />

                      <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
                    </Avatar>
                  </Dropdown.Trigger>

                  <Dropdown.Popover>
                    <Dropdown.Menu onAction={(key) => console.log(key)}>
                      <Dropdown.Item
                        id="profile"
                        className="text-[#2f94ff] font-bold hover:bg-transparent focus:bg-transparent"
                      >
                        <Link
                          href="/profile"
                          className="flex items-center font-bold text-xl gap-1"
                        >
                          <CgProfile />
                          Profile
                        </Link>
                      </Dropdown.Item>

                      <Dropdown.Item
                        id="logout"
                        className="hover:bg-transparent focus:bg-transparent"
                      >
                        <Button onClick={handleLogOut} variant="danger">
                          Logout <IoLogOutOutline />
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="font-bold">
                  Login
                </Link>
                <Link href="/auth/register">
                  <Button>Register</Button>
                </Link>
              </>
            )}
          </div>
          <div className="hidden md:block">
            <ThemeSwitch></ThemeSwitch>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-default-200 bg-background md:hidden">
          <ul className="flex flex-col gap-4 p-5">
            {navLink}
            <Dropdown>
              <Dropdown.Trigger>
                <li>
                  <Link
                    href="/dashboard"
                    className={`${pathName === "/dashboard" ? "font-bold underline" : " "}`}
                  >
                    <span className="flex items-center">
                      {" "}
                      DASHBOARD <IoIosArrowDown />
                    </span>
                  </Link>
                </li>
              </Dropdown.Trigger>

              <Dropdown.Popover>
                <Dropdown.Menu onAction={(key) => console.log(key)}>
                  <Dropdown.Item id="patient">
                    <li className="list-none">
                      <Link
                        href="/patientDashboard/patient"
                        className={`${pathName === "/patientDashboard/patient" ? "font-bold underline" : " "}`}
                      >
                        Patient
                      </Link>
                    </li>
                  </Dropdown.Item>

                  <Dropdown.Item id="doctor">
                    <li className="list-none">
                      <Link
                        href="/doctorDashboard/doctor"
                        className={`${pathName === "/doctorDashboard/doctor" ? "font-bold underline" : " "}`}
                      >
                        Doctor
                      </Link>
                    </li>
                  </Dropdown.Item>

                  <Dropdown.Item id="admin">
                    <li className="list-none">
                      <Link
                        href="/adminDashboard/admin"
                        className={`${pathName === "/adminDashboard/admin" ? "font-bold underline" : " "}`}
                      >
                        Admin
                      </Link>
                    </li>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
            <Link
              href="/profile"
              className="flex items-center font-bold text-xl gap-1"
            >
              <CgProfile />
              Profile
            </Link>
            <hr />

            <li>
              <Link href="#">Login</Link>
            </li>

            <Button color="primary" className="w-full">
              Sign Up
            </Button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
