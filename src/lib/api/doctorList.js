const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getDoctorList = async () => {
  const res = await fetch(`${baseUrl}/api/doctorCreate`, {
    cache: "no-store",
  });

  return res.json();
};




// update Doctor
export const updateDoctor = async (id, doctor) => {
  const res = await fetch(`${baseUrl}/api/doctorCreate/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(doctor),
  });

  return res.json();
};