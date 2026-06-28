import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import DoctorProfileCard from "./DoctorProfileCard";
import DoctorProfileModal from "./DoctorProfileModal";

import { getDoctorByUser } from "@/lib/actions/getDoctor";

export default async function DoctorProfilePage() {
  // Logged-in user
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-xl font-semibold">
          Please login first.
        </h2>
      </div>
    );
  }

  const user = session.user;

  // Find doctor's profile by userId
  const doctor = await getDoctorByUser(user.id);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Doctor Profile
          </h1>

          <p className="text-default-500 mt-2">
            Create and manage your doctor profile.
          </p>
        </div>

        {/* Modal Button */}
        <DoctorProfileModal
          doctor={doctor}
          user={user}
        />
      </div>

      {/* Profile Exists */}
      {doctor ? (
        <DoctorProfileCard doctor={doctor} />
      ) : (
        <div className="border-2 border-dashed rounded-2xl h-[420px] flex flex-col justify-center items-center text-center p-10">
          <h2 className="text-2xl font-bold">
            No Doctor Profile Found
          </h2>

          <p className="text-default-500 mt-3 max-w-md">
            You haven't created your doctor profile yet.
            Click the button above to create your profile.
          </p>
        </div>
      )}
    </div>
  );
}