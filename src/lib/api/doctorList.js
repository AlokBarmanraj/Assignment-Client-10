const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getDoctorList = async () => {
  const res = await fetch(`${baseUrl}/api/doctorCreate`, {
    cache: "no-store",
  });

  return res.json();
};




