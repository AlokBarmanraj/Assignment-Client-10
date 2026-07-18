"use client";

import { useEffect, useMemo, useState } from "react";
import { Button, Spinner, Pagination } from "@heroui/react";
import DoctorCard from "./DoctorCard";
import { getDoctorList } from "@/lib/api/doctorList";

const SearchAndFilterDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  // Pagination state
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

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

  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedSpecialization]);

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

  const totalItems = filteredDoctors.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedDoctors = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return filteredDoctors.slice(start, end);
  }, [filteredDoctors, page]);

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 1) return [1];

    pages.push(1);

    if (page > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("ellipsis");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const startItem = totalItems === 0 ? 0 : (page - 1) * itemsPerPage + 1;

  const endItem = Math.min(page * itemsPerPage, totalItems);

  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 py-10">
      {/* Search & Filter */}

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
          onPress={() => setSearchTerm(searchInput)}
          className="text-white px-8"
        >
          Search
        </Button>

        <select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          className="w-full md:w-[250px] border rounded-xl px-4 py-3 outline-none bg-white text-black dark:bg-zinc-900 dark:text-white"
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
        <>
          {/* Doctor Cards */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedDoctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>

          {/* Pagination */}

          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination className="w-full">
                <Pagination.Summary>
                  Showing {startItem}-{endItem} of {totalItems} results
                </Pagination.Summary>

                <Pagination.Content>
                  <Pagination.Item>
                    <Pagination.Previous
                      isDisabled={page === 1}
                      onPress={() => setPage((p) => p - 1)}
                    >
                      <Pagination.PreviousIcon />
                      <span>Previous</span>
                    </Pagination.Previous>
                  </Pagination.Item>

                  {getPageNumbers().map((p, i) =>
                    p === "ellipsis" ? (
                      <Pagination.Item key={`ellipsis-${i}`}>
                        <Pagination.Ellipsis />
                      </Pagination.Item>
                    ) : (
                      <Pagination.Item key={p}>
                        <Pagination.Link
                          isActive={p === page}
                          onPress={() => setPage(p)}
                        >
                          {p}
                        </Pagination.Link>
                      </Pagination.Item>
                    ),
                  )}

                  <Pagination.Item>
                    <Pagination.Next
                      isDisabled={page === totalPages}
                      onPress={() => setPage((p) => p + 1)}
                    >
                      <span>Next</span>
                      <Pagination.NextIcon />
                    </Pagination.Next>
                  </Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-gray-500 text-lg py-20">
          No doctors found.
        </div>
      )}
    </div>
  );
};

export default SearchAndFilterDoctor;
