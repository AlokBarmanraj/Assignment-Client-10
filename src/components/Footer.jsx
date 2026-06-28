"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  const pathName = usePathname();

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-0">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-40">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <Link href="/">
            <Image
              src="/image/logos.png"
              width={200}
              height={150}
              alt="logo"
              className="mx-auto md:mx-0"
            />

            <h3 className="mt-4 text-sm sm:text-base leading-7">
              Our experienced and dedicated doctors are committed to providing
              high-quality healthcare services with compassion and
              professionalism. From routine check-ups to specialized treatments,
              our medical experts ensure personalized care tailored to each
              patients needs. With modern facilities, advanced technology, and a
              patient-centered approach, we strive to help individuals and
              families achieve better health and well-being. Your health is our
              priority, and our doctors are here to support you every step of
              the way.
            </h3>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-2 md:mt-4 text-center md:text-left">
          <h3 className="font-bold text-2xl sm:text-3xl mb-2.5">Quick link</h3>

          <hr />

          <div className="space-y-3.5 list-none mt-4">
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
            <li>
              <Link
                href="/dashboard/patient"
                className={`${pathName === "/dashboard/patient" ? "font-bold underline" : " "}`}
              >
                DASHBOARD
              </Link>
            </li>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-2 md:mt-4 text-center md:text-left">
          <h3 className="font-bold text-2xl sm:text-3xl mb-2.5">
            Contact Info
          </h3>

          <hr />

          <div className="space-y-3 mt-4">
            <h3 className="flex items-center justify-center md:justify-start text-base sm:text-lg gap-2">
              <CgMail />
              support@healthcare.com
            </h3>

            <h3 className="flex items-center justify-center md:justify-start text-base sm:text-lg gap-2">
              <IoMdCall />
              <span className="font-bold">Hotline:</span> +880 1234-567890
            </h3>

            <div className="flex justify-center md:justify-start font-bold text-2xl gap-3 mt-3">
              <span className="cursor-pointer hover:scale-110 duration-300">
                <FaFacebook />
              </span>

              <span className="cursor-pointer hover:scale-110 duration-300">
                <FaWhatsappSquare />
              </span>

              <span className="cursor-pointer hover:scale-110 duration-300">
                <FaLinkedin />
              </span>

              <span className="cursor-pointer hover:scale-110 duration-300">
                <FaSquareXTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <hr className="mt-10 mb-4" />

      <p className="mb-8 text-center text-sm sm:text-base">
        © 2026 Doctor. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
