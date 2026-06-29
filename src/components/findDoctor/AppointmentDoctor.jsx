"use client";

import { Check } from "@gravity-ui/icons";
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

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaClock,
  FaNotesMedical,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function AppointmentDoctor() {
  const onSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
      try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.insertedId) {
        toast.success("Doctor Appointment successful")
      e.target.reset();
    }
  } catch (error) {
    console.error(error);
  }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Card className="rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-2">
          Book Appointment
        </h1>

        <p className="text-center text-default-500 mb-10">
          Fill in your information below to schedule your appointment.
        </p>

        <Form
          className="flex flex-col gap-6"
          render={(props) => <form {...props} />}
          onSubmit={onSubmit}
        >
          {/* Patient Name */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <FaUser />
              Patient Name
            </Label>

            <TextField isRequired name="patientName">
              <Input placeholder="Enter your full name" />
              <FieldError />
            </TextField>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <FaEnvelope />
              Email
            </Label>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <FaPhone />
              Phone Number
            </Label>

            <TextField
              isRequired
              name="phone"
              validate={(value) => {
                if (value.length < 11) {
                  return "Phone number must be 11 digits";
                }
                return null;
              }}
            >
              <Input placeholder="01XXXXXXXXX" />
              <FieldError />
            </TextField>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <FaCalendarAlt />
              Appointment Date
            </Label>

            <TextField isRequired name="appointmentDate" type="date">
              <Input />
              <FieldError />
            </TextField>
          </div>

          {/* Time */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <FaClock />
              Preferred Time
            </Label>

            <TextField isRequired name="appointmentTime" type="time">
              <Input />
              <FieldError />
            </TextField>
          </div>

          {/* Problem */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <FaNotesMedical />
              Problem Description
            </Label>

            <textarea
              name="problem"
              rows="5"
              required
              className="w-full rounded-xl border border-default-300 bg-transparent px-4 py-3 outline-none focus:border-primary"
              placeholder="Describe your health problem..."
            />

            <Description>
              Please briefly describe your symptoms.
            </Description>
          </div>

          <div className="flex gap-4 pt-4">
            <Button color="primary" type="submit">
              <Check />
              Book Appointment
            </Button>

            <Button variant="bordered" type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}