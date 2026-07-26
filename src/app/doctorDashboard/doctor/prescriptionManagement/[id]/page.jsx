import PrescriptionManagementPage from "@/components/prescription/PrescriptionManagementPage";



export default async function Page({ params }) {
  const { id } = await params;
  console.log("Appointment ID:", id);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointmentRequests/${id}`,
    {
      cache: "no-store",
    }
  );

  const appointment = await res.json();

  return <PrescriptionManagementPage appointment={appointment} />;
}