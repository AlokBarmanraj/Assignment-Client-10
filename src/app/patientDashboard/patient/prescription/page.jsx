"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import PrescriptionView from "@/components/dashboard/patient/ViewPrescription";

export default function MyPrescriptionTable() {
  const { data: session, isPending } = authClient.useSession();

  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPrescription = async (email) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/prescription?email=${email}`,
        {
          cache: "no-store",
        },
      );

      const data = await res.json();

      if (data.success) {
        setPrescriptions(data.data);
      } else {
        setPrescriptions([]);
      }
    } catch (error) {
      console.log(error);
      setError("Prescription load failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isPending) return;

    const email = session?.user?.email;

    if (!email) {
      setError("Please login first.");
      setLoading(false);
      return;
    }

    fetchPrescription(email);
  }, [session, isPending]);

  if (loading || isPending) {
    return (
      <div className="flex justify-center items-center h-72">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <div
        className="
rounded-2xl 
border 
border-gray-200 
dark:border-gray-700 
bg-white 
dark:bg-gray-900 
shadow-xl
overflow-hidden
"
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              My Prescriptions
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              View all prescriptions provided by your doctor.
            </p>
          </div>

          <button
            onClick={() => fetchPrescription(session.user.email)}
            className="btn btn-primary btn-sm"
          >
            Refresh
          </button>
        </div>

        {error && (
          <div className="m-5 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 p-4 text-red-600 dark:text-red-300">
            {error}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="table table-fixed w-full">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="w-[8%]">#</th>
                <th className="w-[25%]">Doctor</th>
                <th className="w-[30%]">Diagnosis</th>
                <th className="w-[20%]">Date</th>
                <th className="w-[17%] text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {prescriptions.length > 0 ? (
                prescriptions.map((item, index) => (
                  <tr
                    key={item._id}
                    className="
              hover:bg-gray-50 
              dark:hover:bg-gray-800
              transition
            "
                  >
                    <td className="font-medium">{index + 1}</td>

                    <td>
                      <div className="font-semibold text-gray-800 dark:text-white">
                        {item.doctorName || "Unknown Doctor"}
                      </div>
                    </td>

                    <td>
                      <p className="truncate max-w-xs">
                        {item.diagnosis || "-"}
                      </p>
                    </td>

                    <td>
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : "-"}
                    </td>

                    <td>
                      <div className="flex justify-center">
                        <PrescriptionView prescription={item} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-16">
                    <div className="flex flex-col items-center">
                      <div className="text-5xl">📄</div>

                      <h3
                        className="
                text-xl 
                font-semibold 
                mt-3 
                text-gray-700 
                dark:text-white
              "
                      >
                        No Prescription Found
                      </h3>

                      <p
                        className="
                text-gray-500 
                dark:text-gray-400 
                mt-2
              "
                      >
                        Your prescriptions will appear here.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
