"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { FiArrowRight } from "react-icons/fi";
import { MdMissedVideoCall, MdOutlinePhoneCallback } from "react-icons/md";
import { FaMicrophoneLines } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100">
      <div className="mx-auto flex  min-h-[90vh] max-w-7xl flex-col-reverse items-center gap-10 px-6 py-8 lg:flex-row lg:py-0">
        {/* LEFT SIDE CONTENT */}
        <div className="flex w-full flex-col justify-center text-center lg:w-1/2 lg:text-left">
          <span className="mx-auto w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 lg:mx-0">
            Trusted Medical Services
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Find the Best <br />
            <span className="text-blue-600">Doctors Near You</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Book appointments with experienced doctors anytime, anywhere. Fast,
            secure and trusted healthcare platform.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button color="primary" size="lg" endContent={<FiArrowRight />}>
              Book Appointment
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          {/* BACKGROUND CIRCLE */}
          <div className="absolute bottom-0 h-[420px] w-[420px] rounded-full bg-blue-200 blur-3xl"></div>

          {/* IMAGE WRAPPER - IMPORTANT FIX */}
          <div className="relative w-full items-end justify-center overflow-hidden leading-[0]">
            <div className="flex">
              <Image
                src="/image/doctor.png"
                alt="Doctor"
                width={520}
                height={680}
                priority
                className="block object-bottom object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
