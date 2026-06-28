"use client";
import { error } from "better-auth/api";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-red-500">Something went wrong!</h2>

      <p className="mt-2 text-gray-600">{error?.message}</p>
    </div>
  );
};

export default ErrorPage;