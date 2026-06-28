
import DoctorDetailsCard from "@/components/findDoctor/DoctorDetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const DoctorDetails = async ({ params }) => {
  const baseUrl =process.env.NEXT_PUBLIC_BASE_URL
  const { id } = await params;
 const res = await fetch(`${baseUrl }/findDoctors/${id}`, {
    cache: "no-store",
  });
  // const { token } = await auth.api.getToken({
  //   headers: await headers(),
  // });

  // const res = await fetch(
  //   `${baseUrl}/findDoctors/${id}`,
  //   {
  //     // headers: {
  //     //   authorization: `Bearer ${token}`,
  //     // },
  //     // cache: "no-store",
  //   }
  // );

  const doctorData = await res.json();

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      <DoctorDetailsCard doctorData={doctorData} />
    </div>
  );
};

export default DoctorDetails;










