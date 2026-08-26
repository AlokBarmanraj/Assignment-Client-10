"use client";

import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import {
  FiShieldOff,
  FiHome,
  FiLogIn,
  FiArrowLeft,
} from "react-icons/fi";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-danger/10 flex items-center justify-center">
            <FiShieldOff
              size={48}
              className="text-danger"
            />
          </div>
        </div>

        {/* 403 */}
        <h1 className="text-8xl sm:text-9xl font-black text-danger">
          403
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
          Access Denied
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-xl mx-auto text-default-500 text-base sm:text-lg leading-7">
          You don't have permission to access this page.
          Please log in with an authorized account or return to
          the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">

          {/* Home */}
          <Button
            color="primary"
            size="lg"
            radius="full"
            startContent={<FiHome size={19} />}
            className="w-full sm:w-auto"
            onPress={() => router.push("/")}
          >
            Go to Homepage
          </Button>

          {/* Login */}
          <Button
            variant="bordered"
            size="lg"
            radius="full"
            startContent={<FiLogIn size={19} />}
            className="w-full sm:w-auto"
            onPress={() => router.push("/auth/login")}
          >
            Login
          </Button>

          {/* Back */}
          <Button
            variant="light"
            size="lg"
            radius="full"
            startContent={<FiArrowLeft size={19} />}
            className="w-full sm:w-auto"
            onPress={() => router.back()}
          >
            Go Back
          </Button>
        </div>

        {/* Bottom Message */}
        <div className="mt-10 p-5 rounded-2xl bg-default-100 border border-default-200">
          <p className="text-sm text-default-500 leading-6">
            If you believe this is a mistake, please make sure you
            are logged in with the correct account or contact the
            administrator.
          </p>
        </div>

      </div>
    </main>
  );
}