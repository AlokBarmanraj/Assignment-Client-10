"use client";

import { useEffect, useMemo, useState } from "react";
import { Button, Spinner } from "@heroui/react";
import DoctorCard from "./DoctorCard";
import { getDoctorList } from "@/lib/api/doctorList";

const SearchAndFilterDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctorList();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const specializations = [
    ...new Set(doctors.map((doctor) => doctor.specialization).filter(Boolean)),
  ];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchSearch = (doctor.doctorName || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchSpecialization =
        selectedSpecialization === "" ||
        doctor.specialization === selectedSpecialization;

      return matchSearch && matchSpecialization;
    });
  }, [doctors, searchTerm, selectedSpecialization]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search Doctor..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full md:w-[400px] border rounded-xl px-4 py-3 outline-none"
        />

        <Button
          color="primary"
          onClick={() => setSearchTerm(searchInput)}
          className="text-white px-8"
        >
          Search
        </Button>

        <select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          className="w-full md:w-[250px] border rounded-xl px-4 py-3 outline-none"
        >
          <option value="">All Specializations</option>

          {specializations.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="min-h-[400px] flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : filteredDoctors.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg py-20">
          No doctors found.
        </div>
      )}
    </div>
  );
};

export default SearchAndFilterDoctor;