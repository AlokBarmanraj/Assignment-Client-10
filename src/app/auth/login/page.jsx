"use client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect")|| "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Sign Up Successfully!");
      router.push(redirectTo);
    }

    if (error) {
      toast.error("Sign Up Field!");
    }
  };

    const handleGoogleSignIn = async () => {
      await authClient.signIn.social({
        provider: "google",
      });
    };

  return (
    <div className="mt-16 px-4">
      <Card className="max-w-2xl p-10 mx-auto">
        <div>
          <h1 className="font-bold text-3xl text-center pb-10">Login</h1>
        </div>

        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input name="email" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type={showPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <div className="relative w-full">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          <div className="flex items-center gap-2 w-full">
            <Button type="submit" className="w-full">
              Login
            </Button>

            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t-2"></div>

          <span className="mx-4 font-semibold uppercase text-sm">or</span>

          <div className="flex-1 border-t-2"></div>
        </div>
        
        <Button
          onClick={handleGoogleSignIn}
          className="w-full mt-5 flex items-center justify-center gap-2 border border-gray-400 bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition"
        >
          <FcGoogle />
          Continue With Google
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;
