"use client";
import { authClient } from "@/lib/auth-client";
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
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });
    if (data) {
      toast.success("Sign Up Successfully!");
      redirect("/");
    }
    if (error) {
      toast.error("Sign Up Field!");
    }
  };

  const handleGoogleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="mt-16">
      <Card className="max-w-2xl p-10 mx-auto">
        <div>
          <h1 className="font-bold text-3xl text-center pb-10">Register</h1>
        </div>
        <Form onSubmit={onSubmit} className="flex  flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input name="name" placeholder="Enter your name" />
            <FieldError />
          </TextField>
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
          <TextField isRequired name="image" type="url">
            <Label>Image Url</Label>
            <Input name="image" placeholder="Enter image url" />
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
          <div className="flex items-center gap-2">
            <Button type="submit" className={"w-full"}>
              Sign Up
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
          onClick={handleGoogleSignUp}
          className={
            "w-full mt-5 flex items-center justify-center gap-2 border border-gray-400 bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition"
          }
        >
          <FcGoogle />
          Continue With Google
        </Button>
      </Card>
    </div>
  );
};

export default RegisterPage;
