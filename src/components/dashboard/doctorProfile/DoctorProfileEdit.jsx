"use client";

import { Modal, Button, TextArea } from "@heroui/react";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Select,
  TextField,
  Surface,
  ListBox,
} from "@heroui/react";
import { FaClock, FaEdit, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { updateDoctor } from "@/lib/actions/doctorCreate";

export default function DoctorProfileEdit({ doctor, onSuccess }) {
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      doctorName: formData.get("doctorName"),
      specialization: formData.get("specialization"),
      qualifications: formData.get("qualifications"),
      experience: formData.get("experience"),
      consultationFee: formData.get("consultationFee"),
      hospitalName: formData.get("hospitalName"),
      profileImage: formData.get("profileImage"),
      availableDays: formData.get("availableDays"),
      startTime: formData.get("startTime"),
      endTime: formData.get("endTime"),
      verificationStatus: formData.get("verificationStatus"),
      description: formData.get("description")
    };
    const res = await updateDoctor(doctor._id, data);

    console.log(res);
    if (res.modifiedCount > 0) {
      toast.success("Schedule Updated Successfully");
      onSuccess();
    } else {
      toast.error("Update Failed");
    }
  };
  return (
    <Modal>
      <Button variant="outline" className={"border-none"}>
        <FaEdit></FaEdit>
      </Button>
      <Modal.Backdrop variant="blur">
        <Modal.Container>
          <Modal.Dialog className="max-h-[90vh] sm:max-w-4xl">
            <Modal.Header>
              <Modal.Heading className="font-bold text-3xl">
                Create Doctor Profile
              </Modal.Heading>
              <Description>Fill in the doctor's information.</Description>
            </Modal.Header>

            <Modal.Body>
              {/* <DoctorProfileForm /> */}
              <div className="flex justify-center p-6">
                <Surface className="w-full max-w-4xl rounded-2xl p-6">
                  <Form onSubmit={onSubmit}>
                    <Fieldset className="w-full">
                      <Fieldset.Group className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Doctor Name */}
                        <TextField isRequired name="doctorName">
                          <Label>Doctor Name</Label>
                          <Input
                            variant="secondary"
                            placeholder="Dr. John Doe"
                          />
                          <FieldError />
                        </TextField>

                        {/* Specialization */}
                        <Select
                          name="specialization"
                          className="w-full"
                          defaultSelectedKeys={["cardiology"]}
                        >
                          <Label>Specialization</Label>

                          <Select.Trigger>
                            <Select.Value placeholder="Select Specialization" />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item
                                id="cardiology"
                                textValue="Cardiology"
                              >
                                Cardiology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="medicine"
                                textValue="General Medicine"
                              >
                                General Medicine
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="neurology"
                                textValue="Neurology"
                              >
                                Neurology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="nephrology"
                                textValue="Nephrology"
                              >
                                Nephrology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="orthopedics"
                                textValue="Orthopedics"
                              >
                                Orthopedics
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="dermatology"
                                textValue="Dermatology"
                              >
                                Dermatology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="gynecology"
                                textValue="Gynecology"
                              >
                                Gynecology & Obstetrics
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="pediatrics"
                                textValue="Pediatrics"
                              >
                                Pediatrics
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="psychiatry"
                                textValue="Psychiatry"
                              >
                                Psychiatry
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="ophthalmology"
                                textValue="Ophthalmology"
                              >
                                Ophthalmology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="ent" textValue="ENT">
                                ENT
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="urology" textValue="Urology">
                                Urology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="oncology" textValue="Oncology">
                                Oncology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="endocrinology"
                                textValue="Endocrinology"
                              >
                                Endocrinology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="gastroenterology"
                                textValue="Gastroenterology"
                              >
                                Gastroenterology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="pulmonology"
                                textValue="Pulmonology"
                              >
                                Pulmonology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="anesthesiology"
                                textValue="Anesthesiology"
                              >
                                Anesthesiology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="radiology"
                                textValue="Radiology"
                              >
                                Radiology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="pathology"
                                textValue="Pathology"
                              >
                                Pathology
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="dentistry"
                                textValue="Dentistry"
                              >
                                Dentistry
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>

                          <Description>
                            Select the doctor's specialization.
                          </Description>

                          <FieldError />
                        </Select>

                        {/* Qualifications */}
                        <Select
                          name="qualifications"
                          className="w-full"
                          defaultSelectedKeys={["mbbs"]}
                        >
                          <Label>Qualification</Label>

                          <Select.Trigger>
                            <Select.Value placeholder="Select Qualification" />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="mbbs" textValue="MBBS">
                                MBBS
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="bds" textValue="BDS">
                                BDS
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="fcps" textValue="FCPS">
                                FCPS
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="md" textValue="MD">
                                MD
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="ms" textValue="MS">
                                MS
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="dm" textValue="DM">
                                DM
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="mch" textValue="MCh">
                                MCh
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="dnb" textValue="DNB">
                                DNB
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="mph" textValue="MPH">
                                MPH
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="phd" textValue="PhD">
                                PhD
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>

                          <Description>
                            Select the doctor's highest qualification.
                          </Description>

                          <FieldError />
                        </Select>

                        {/* Experience */}
                        <TextField isRequired name="experience">
                          <Label>Experience (Years)</Label>
                          <Input
                            type="number"
                            variant="secondary"
                            placeholder="10"
                          />
                          <FieldError />
                        </TextField>

                        {/* Consultation Fee */}
                        <TextField isRequired name="consultationFee">
                          <Label>Consultation Fee</Label>
                          <Input
                            type="number"
                            variant="secondary"
                            placeholder="800"
                          />
                          <FieldError />
                        </TextField>

                        {/* Hospital */}
                        <TextField isRequired name="hospitalName">
                          <Label>Hospital Name</Label>
                          <Input
                            variant="secondary"
                            placeholder="City Hospital"
                          />
                          <FieldError />
                        </TextField>

                        {/* Profile Image */}
                        <TextField isRequired name="profileImage">
                          <Label>Profile Image URL</Label>
                          <Input
                            type="url"
                            variant="secondary"
                            placeholder="https://example.com/image.jpg"
                          />
                          <FieldError />
                        </TextField>

                        {/* Available Days */}
                        <Select
                          name="availableDays"
                          className="w-full"
                          defaultSelectedKeys={["saturday"]}
                        >
                          <Label>Available Day</Label>

                          <Select.Trigger>
                            <Select.Value placeholder="Select a day" />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="saturday" textValue="Saturday">
                                Saturday
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="sunday" textValue="Sunday">
                                Sunday
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="monday" textValue="Monday">
                                Monday
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="tuesday" textValue="Tuesday">
                                Tuesday
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="wednesday"
                                textValue="Wednesday"
                              >
                                Wednesday
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="thursday" textValue="Thursday">
                                Thursday
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="friday" textValue="Friday">
                                Friday
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>

                          <Description>
                            Select the doctor's available day.
                          </Description>
                          <FieldError />
                        </Select>

                        {/* Available Slots */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          {/* Start Time */}
                          <TextField isRequired name="startTime">
                            <Label>Start Time</Label>

                            <div className="relative">
                              <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10" />

                              <Input
                                type="time"
                                variant="secondary"
                                className="pl-10"
                              />
                            </div>

                            <FieldError />
                          </TextField>

                          {/* End Time */}
                          <TextField isRequired name="endTime">
                            <Label>End Time</Label>

                            <div className="relative">
                              <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10" />

                              <Input
                                type="time"
                                variant="secondary"
                                className="pl-10"
                              />
                            </div>

                            <Description>
                              Select the doctor's available time.
                            </Description>

                            <FieldError />
                          </TextField>
                        </div>

                        {/* Verification Status */}
                        <Select
                          name="verificationStatus"
                          className="w-full"
                          defaultSelectedKeys={["pending"]}
                        >
                          <Label>Verification Status</Label>

                          <Select.Trigger>
                            <Select.Value placeholder="Select status" />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="pending" textValue="Pending">
                                Pending
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="verified" textValue="Verified">
                                Verified
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item id="rejected" textValue="Rejected">
                                Rejected
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                                                {/* Description */}
                        <TextField
                          isRequired
                          name="description"
                          className="md:col-span-2"
                        >
                          <Label>Description</Label>

                          <TextArea
                            placeholder="Write doctor's description..."
                            className="w-full min-h-32 rounded-lg border border-gray-300 p-3"
                          />

                          <Description>
                            Write a short description about the doctor.
                          </Description>

                          <FieldError />
                        </TextField>
                      </Fieldset.Group>

                      <Fieldset.Actions>
                        <Button type="submit">
                          <FloppyDisk />
                          Save Doctor
                        </Button>

                        <Button type="reset" variant="secondary">
                          Reset
                        </Button>
                      </Fieldset.Actions>
                    </Fieldset>
                  </Form>
                </Surface>
              </div>
            </Modal.Body>

            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
